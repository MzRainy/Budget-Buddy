import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { Month: June, count: 10 },
    { Month: July, count: 20 },
    { Month: August, count: 15 },
    { Month: September, count: 25 },
    { Month: October, count: 22 },
    { Month: November, count: 30 },
    { Month: December, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.Month),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.Expenses)
          }
        ]
      }
    }
  );
})();
 