const express = require('express')

// MIDDLEWARE
const cors = require('cors');
const logger = require('morgan');
const bodyParser  = require('body-parser');
const PORT = process.env.PORT || 3001

//CONTROLLERS
const userController = require('./controllers/UserController.js')

const app = express()

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded ({ extended:false }));
app.use(bodyParser.json());


app.listen(PORT, ()=> {
    console.log(`${PORT} RUNNING SMOOTHLY`)
})


app.get('/', (req, res)=> {                 // MAKING THE LANDING PAGE
    res.send('SERVER INITIATED')
}) 

app.get('/users', userController.GetUser)


















// app.get('/users', (req, res)=> {                 // USERS
//     res.send('USERS INITIATED')
// }) 

// app.get('/parks', (req, res)=> {                 // PARKS
//     res.send('PARKS INITIATED')
// }) 

// app.get('/finds', (req, res)=> {                 // FINDS
//     res.send('FINDS INITIATED')
// })


// C  get: [Function (anonymous)],
// R  post: [Function (anonymous)],
// U  patch: [Functions (anonymous)],   = ALLOWS US TO CHANGE A KEY VALUE PAIR
//    put: [Function (anonymous)],      = ALLOWS US TO ADD A NEW PAIR IN (EX: IS VACCINATED, IS HYBRID)
// D  delete: [Function (anonymous)]