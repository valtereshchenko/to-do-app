const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const static = require('serve-static')

const hostname = 'localhost';
const port = 3000;


const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json());
app.set('view engine', 'ejs')
app.use(static(__dirname + '/public'));


// app.get('/', (req, res) => {
//     res.render('index', {name: 'Anna', length: 5});
// })

app.get('/', (req, res) => {
    res.render('index', {name: 'Anna', length: 5});
})

app.route('/tasks')
.post(urlencodedParser, (req,res) =>{
    console.log(req.body.newTask);
    let newTask = {
        id: 4,
        text: req.body.newTask,
        completed: false
    }
    tasks.push(newTask);
    res.send(tasks)
    //res.redirect("/")
})


app.listen({path: hostname, port: port} , (err) => {
    if(err) console.log(err);
    else console.log('server running on port' + port)
})

let user;

let tasks = [
    {
        id: 1,
        text: 'coding',
        completed: false,
    },
    {
        id: 2,
        text: 'reading',
        completed: true,
    },
    {
        id: 3,
        text: 'shopping',
        completed: false,
    }

]
