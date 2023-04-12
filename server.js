const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded ({ extended:false }))


app.listen(PORT, ()=> {
    console.log(`${PORT} RUNNING SMOOTHLY`)
})


// app.get('/', (req, res)=> {                 // MAKING THE LANDING PAGE
//     res.send('SERVER INITIATED')
// }) 

// app.get('/users', (req, res)=> {                 // USERS
//     res.send('USERS INITIATED')
// }) 

// app.get('/parks', (req, res)=> {                 // PARKS
//     res.send('PARKS INITIATED')
// }) 

// app.get('/finds', (req, res)=> {                 // FINDS
//     res.send('FINDS INITIATED')
// })


app.get(
    '/middleware', 
    (req, res, next) => {
        console.log('REQUEST SENT')
    next()
    },
    (req, res) => {
    res.send('RESPONSE SUCCESS')
});

app.get('/hello', (req, res) => {
    console.log('IM IN THE HELLO ROUTE')
    res.send('howdy')
});

app.post('/hello', (req, res) => {
    console.log(`POST SUCCESSFULL`)
    res.send({ msg: 'YOU DID IT!' })
});

app.get('/message/:id', (req, res) => {
    res.send({ msg: `MESSAGE #${req.params.id} FOUND`})
  });

  app.get('/find', (req, res) => {
    res.send({
      name: `CALL ME ${req.query.myName} `,
      age:`I'M ${req.query.myAge} YEARS OLD`
    })
  })

// C  get: [Function (anonymous)],
// R  post: [Function (anonymous)],
// U  patch: [Functions (anonymous)],   = ALLOWS US TO CHANGE A KEY VALUE PAIR
//    put: [Function (anonymous)],      = ALLOWS US TO ADD A NEW PAIR IN (EX: IS VACCINATED, IS HYBRID)
// D  delete: [Function (anonymous)]