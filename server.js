const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');


const sequelize = require('./config/connection');


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};


// Route to display static src images 
app.get("/static", (req, res) => { 
  res.render("static"); 
}); 

// Route to display dynamic src images 
app.get("/dynamic", (req, res) => { 
  imageList = []; 
  imageList.push({ src: "Challenges/15Weekly-Challenge/Budget-Buddy/Images/2023-11-30_19-07-50.png", name: "personal budget" }); 
  imageList.push({ src: "2023-11-30_19-09-12.png", name: "Linen" }); 
  //imageList.push({ src: "icons/react.png", name: "react" }); 
  res.render("dynamic", { imageList: imageList }); 
});

// Add a comment describing the functionality of this statement
app.use(session(sess));

//app.engine('handlebars',exphbs({ defaultLayout: "main" }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("images"));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
