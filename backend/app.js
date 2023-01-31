const express = require('express');
//const bodyParser = require('body-parser');
const static = require('serve-static');
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const MongoStore= require('connect-mongo');
var passport = require('passport');
var LocalStrategy = require('passport-local');
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const handleErrors = require('./middleware/handleErrors')

dotenv.config();
const hostname = 'localhost';
const port = process.env.PORT || 3000;



//console.log(process.env)

//Before this start your database server
//using brew
//brew services start mongodb-community

// const DB_server = 'mongodb://127.0.0.1:27017';
//const database = 'todoList';

mongoose.set('strictQuery', true);
//mongoose.connect(`${DB_server}/${database}`)
mongoose.connect(`${process.env.DB_SERVER}`)
.then(() => console.log('Database server connected'))
.catch((err) => console.log(err))

const app = express();

app.use(express.json());
app.set('view engine', 'ejs')
app.use(static(__dirname + '/public'));
app.use(methodOverride('_method'))

app.use(flash())
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60*60*1000}, // 1hour, maxAge needs to be indicated in milliseconds
  store: MongoStore.create({
    mongoUrl: process.env.DB_SERVER,
    collection: 'sessions'
  })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);


app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.use(handleErrors);
//to connect to the mongoose db
mongoose.connect(process.env.DB_SERVER, {useNewUrlParser:true})
.then(() => {
  console.log('Connected to the DB')
  app.listen(process.env.PORT, "localhost", (err) => {
    if (err){
      console.log("Server could not be started" + err.message)
    }else{
      console.log(`Server listening on port ${process.env.PORT}`)
    }
  })
})
.catch(err =>{
  console.error(err.message)})
