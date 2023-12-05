// Monthly object to manage income, expenses, and categories.
const Monthly = {
    incomeData: {},
    expenseData: {},

    //Initialize method
    init: function() {
        this.bindEvents();
        this.updateChart();
    },

    //bind events
    bindEvents: function() {
        const form = document.getElementById('transactionForm');
        form.addEventListener('submit', this.addTransaction.bind(this));
    },

// Add transaction method
addTransaction: function(event) {
    event.preventDefault();

    const category = document.getElementById('category').ariaValueMax;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    
    if (type === 'Income') {
        this.incomeData[category] = (this.incomeData[category] || 0) + amount;   
    } else {
        this.expenseData[category] = (this.expenseData[category] || 0) + amount;
    }

    this.updateChart();
},

// Update chart method
updateChart: function() {
const ctx = document.getElementById('myChart').getContext('2d');

const data = {
labels: Object.keys({ ...this.incomeData, ...this.expenseData }),
datasets: [{
label: 'Income',
backgroundColor: 'rgba(75, 192, 192, 0.2)',
borderColor: 'rgba(75, 192, 192, 1)',
borderWidth: 1,
data: Object.values(this.incomeData)
}, {
    label: 'Expenses',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderWidth: 1,
    data: Object.values(this.expenseData)
}]
};
  
const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

if (this.chart) {
    this.chart.destroy();
}
this.chart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
}
};

// Initialize the monthly object
Monthly.init();
