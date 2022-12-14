const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const static = require('serve-static')

//var methodOverride = require('method-override')


const hostname = 'localhost';
const port = 3000;


const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.send('Welcome to our tasks server');
})

app.route('/tasks')
.post(urlencodedParser, (req,res) =>{
    if (!req.body.newTask.trim()) {
        console.log('Write a task');
    }
    else {
        let newid = tasksArray[tasksArray.length-1].id
        console.log(req.body.newTask);
        let newTask = {
            id: ++newid,
            text: req.body.newTask,
            completed: false
        }
        tasksArray.push(newTask);
        //res.send(tasksArray)
        res.redirect("/tasks");
    }
})
.get((req, res) => {
    res.render('index', {name: 'Anna', length: 5, tasks: tasksArray});
})

app.route('/login')
.get(urlencodedParser,(req, res) => {
    res.render('login');
})
.post(urlencodedParser,(req, res) => {
    let response = {
        username: req.body.user_name,
        email: req.body.user_email
    }
    console.log('user: '+req.body.user_name);
    console.log('email: '+req.body.user_email)
    res.end('Welcome back '+response.username+'!');
})



app.listen({path: hostname, port: port} , (err) => {
    if(err) console.log(err);
    else console.log('server running on port' + port)
})

let user;

let tasksArray = [
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
