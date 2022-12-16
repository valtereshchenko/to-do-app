const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');


function createNewTask (req,res) {
    let newTask = {
        id: uuidv4(),
        text: req.body.newTask,
        completed: false
    }

    let databaseTasksJSON = fs.readFileSync('./public/storage.json')
    let tasksJSON = JSON.parse(databaseTasksJSON)
    tasksJSON.push(newTask);

    fs.writeFile('./public/storage.json', JSON.stringify(tasksJSON, null, 2), (err) => {
        if(err){
            console.log('Error'+ err)
        }
    })
    res.redirect('/tasks');
}

function getTasks(req, res){
    let databaseTasksJSON = fs.readFileSync('./public/storage.json', 'utf8')
    let tasksJSON = JSON.parse(databaseTasksJSON)
    res.render('index', {tasks: tasksJSON});
}

function getTask(req, res){
    let databaseTasksJSON = fs.readFileSync('./public/storage.json', 'utf8')
    let tasksJSON = JSON.parse(databaseTasksJSON)
    let task = tasksJSON.filter(element => element.id === req.params.id)
    res.end(JSON.stringify(task));
}

function deleteTask(req, res) {
    let databaseTasksJSON = fs.readFileSync('./public/storage.json', 'utf8');
    let tasksJSON = JSON.parse(databaseTasksJSON);
    let found = tasksJSON.findIndex(element => element.id === req.params.id ? element: null);
    if (found !== null) {
        
        tasksJSON.splice(found,1);
        fs.writeFile('./public/storage.json', JSON.stringify(tasksJSON, null, 2), (err) => {
            if(err){
                console.log('Error'+ err)
            }
        })

        res.json({
            success: true,
            redirect_path: "/tasks",
        })
        

    } else {
        res.json({
            success:false
        })
    }
    
    
}

module.exports = {createNewTask, getTasks, getTask, deleteTask};