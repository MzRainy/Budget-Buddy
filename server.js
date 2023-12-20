const express = require("express");
const path = require("path");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


//Config sessions using cookies
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    //Sets the duration of the session
    maxAge: 15 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//Middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

//Handlebars setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Routes
app.use(routes);

//Initialize server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
