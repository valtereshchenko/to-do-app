const express = require('express');
//const bodyParser = require('body-parser');
const static = require('serve-static');
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");


const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.json());
app.set('view engine', 'ejs')
app.use(static(__dirname + '/public'));

app.use('/tasks', taskRoutes);
app.use('/login', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to our tasks server');
})

app.listen({path: hostname, port: port} , (err) => {
    if(err) console.log(err);
    else console.log('server running on port' + port)
})


