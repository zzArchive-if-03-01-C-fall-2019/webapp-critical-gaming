if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var router = express.Router();
var favicon = require('serve-favicon')

app.use(express.static(__dirname + 'views'));
app.use('/static', express.static(path.join(__dirname, '/views/html/games/')))

app.use(favicon(path.join(__dirname, 'views', 'css', 'pictures', 'favicon.ico')))

//All basic HTML Files for the server
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/html/home.html');
});

app.get('/home', function(req, res){
    res.sendFile(__dirname + '/views/html/home.html');
});

app.get('/gaming', function (req, res) {
  res.sendFile(__dirname + '/views/html/gaming.html')
})

app.get('/AboutUs', function (req, res) {
  res.sendFile(__dirname + '/views/html/AboutUs.html')
})

app.get('/changelog', function (req, res) {
  res.sendFile(__dirname + '/views/html/changelog.html')
})

app.get('/dev', function (req, res) {
  res.sendFile(__dirname + '/views/html/dev.html')
})

app.get('/games', function (req, res) {
  res.sendFile(__dirname + '/views/html/games.html')
})

app.get('/HallOfFame', function (req, res) {
  res.sendFile(__dirname + '/views/html/HallOfFame.html')
})

app.get('/publisher', function (req, res) {
  res.sendFile(__dirname + '/views/html/publisher.html')
})

app.get('/survey', function (req, res) {
  res.sendFile(__dirname + '/views/html/survey.html')
})

//All HTML pages for the games tab
app.get('/cities_skylines_page', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/cities_skylines/cities_skylines_page.html')
})

app.get('/darksouls3', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/darksouls3/darksouls3.html')
})

app.get('/csgo', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/csgo/csgo.html')
})

app.get('/escape_fro_tarkov_page', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/escape_from_takrov/escape_fro_tarkov_page.html')
})

app.get('/fallenorder', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/fallenorder/fallenorder.html')
})

app.get('/fortnite_page', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/fortnite/fortnite_page.html')
})

app.get('/lol', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/lol/lol.html')
})

app.get('/minecraft', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/minecraft/minecraft.html')
})

app.get('/nomansky', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/nomansky/nomansky.html')
})

app.get('/odyssey', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/odyssey/odyssey.html')
})

app.get('/rainbow_six', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/rainbow_six/rainbow_six.html')
})

app.get('/witcher3', function (req, res) {
  res.sendFile(__dirname + '/views/html/games/witcher3/witcher3.html')
})

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

app.set('view-engine', 'ejs')
app.use(express.static('views'));
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
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

app.listen(3000)
