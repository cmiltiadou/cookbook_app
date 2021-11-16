require('dotenv').config()
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./config/ppConfig')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')
const methodOverride = require('method-override')
const axios = require('axios').default;
const db = require('./models')




// views (ejs and layouts) set up
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// body parser middelware
app.use(express.urlencoded({extended:false}))

//method override to delete 
app.use(methodOverride('_method')) 

// session middleware
app.use(session({
    secret: process.env.SUPER_SECRET_SECRET,
    resave: false,
    saveUninitialized: true
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// flash middleware (must go AFTER session middleware)
app.use(flash())

// custom middleware
app.use((req, res, next) => {
    // before every route, attach the flash messages and current user to res.locals
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next()
})

// controllers middleware 
app.use('/auth', require('./controllers/auth'))
app.use('/recipes', isLoggedIn, require('./controllers/recipes'))


// home route
app.get('/', (req, res)=>{
    res.render('home')
})

// profile route
app.get('/profile/:id', isLoggedIn, (req, res)=>{
    db.recipe.findAll({
        include: [db.user],
        where: {userId: req.params.id},
    }).then((recipes) =>{
        res.render('profile', {recipes: recipes})
    }).catch((error)=>{
        console.log(error)
        res.status(400).render('main/404')
    })
})




app.listen(3000, ()=>{
    console.log(process.env.SUPER_SECRET_SECRET)
    console.log("auth_practice running on port 3000")
})