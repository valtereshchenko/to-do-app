const express = require('express');
//const bodyParser = require('body-parser');
const static = require('serve-static');
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

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

app.use('/tasks', taskRoutes);
//app.use('/login', userRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.listen({path: hostname, port: port} , (err) => {
    if(err) console.log(err);
    else console.log('server running on port' + port)
})


