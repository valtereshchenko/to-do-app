const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

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

module.exports = {getLoginPage, sendDataLogin}

