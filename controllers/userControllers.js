const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const userModel = require('../models/userModel');


async function getUsers(req, res) {
    const users = await userModel.find({});
    //console.log(users);
    res.send(users);
}

async function getUserByName(req,res){
    const user = await userModel.findOne({name: req.params.name});
    console.log(user)
    //user.parent = "63bd3930e94237ab282fb0ca";
    //await user.save();
    res.send(user)
}

async function deleteUser(req,res){
    try{
        const user = await userModel.deleteOne({name: req.params.name});
        console.log(user);
        
        res.json({
            message: "User deleted!",
            success: true
    });
    }
    catch(error){
        console.log(error)
    }
    
}

async function createUser(req, res){
    console.log(req.body)
    try{
        const user1 = await userModel.create({
            name: req.body.user_name,
            email: req.body.user_email,
            age: req.body.user_age,
            parent: req.body.parent
            
        });
        console.log(user1);
        console.log('User is created');
        res.redirect('/')
    } 
    catch(error){
        console.log(error.message);
        res.sendStatus(404);
        //res.redirect('/')
        return
    }
    
    
}
//createUser();

function getLoginPage(req, res) {
    res.render('login');
}

function sendDataLogin (req,res) {
    let newUser = {
        id: uuidv4(),
        name: req.body.user_name,
        email: req.body.user_email,
    }

    let databaseUsersJSON = fs.readFileSync('./public/user_storage.json')
    let usersJSON = JSON.parse(databaseUsersJSON)
    usersJSON.push(newUser);

    fs.writeFile('./public/user_storage.json', JSON.stringify(usersJSON, null, 2), (err) => {
        if(err){
            console.log('Error'+ err)
        }
    })
    res.redirect('/tasks');
}

module.exports = {getLoginPage, sendDataLogin, createUser, getUsers, getUserByName, deleteUser}

