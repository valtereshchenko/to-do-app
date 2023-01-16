
const express = require('express')
const router = express.Router();

const static = require('serve-static');
const passport = require('passport')
const bcrypt = require('bcrypt')
const initializePassport = require('../config/passport-config')
const User = require("../models/userModel");
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json());
app.set('view engine', 'ejs')
app.use(static(__dirname + '/public'));
const { BadRequest, NotFound } = require('../utils/errors');




initializePassport(passport);



  router.get('/login', checkNotAuthenticated, (req, res) => {// if the user is logged in, he/she shouldn't be able to see login page
    res.render('login.ejs');
  })

  router.post('/login', checkNotAuthenticated, urlencodedParser, async (req, res) =>{
    const {email, password} = req.body

    const emailDB = await User.findOne({'email': email})
    const passDB = await User.findOne({'password': await bcrypt.hash(password, 10)})
    if (!emailDB || !passDB) {
      throw new NotFound("Email or password missing");
    }
    try{
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })
  }
  catch(err){
    console.log(err);
  }
  })

  router.get('/register', checkNotAuthenticated, (req, res) => {// if the user is logged in, he/she shouldn't be able to see login page
    res.render('register.ejs');
  })

  router.post('/register',urlencodedParser, async(req, res) =>{
   const {name, email, password} = req.body
   if(!name || !email || !password){
     throw new BadRequest('Missing field name, email or password')
   }
   try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

      // register and redirect to login
      
      //res.send(user)
      res.redirect('/auth/login')
    }
    catch(err){
      console.log(err);
      //res.redirect('/')
    }
  })

  router.delete('/logout', (req, res, next) => { //delete the session id
    //req.logOut();

    
    req.logout(function(err) {
      if (err) { return next(err); }
      res.clearCookie("connect.sid", {path: "/"})
      req.session.destroy((err)=>{
        if(err){
          return next(err)
        }
        res.redirect('/auth/login');
      })
      //res.redirect('/');
    });
    //logged out and redirect to login
    
    
  })


  //helper middleware
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {    //a passport function
      return next()
    }
    res.redirect('/login')
  }

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }


  module.exports = router;
