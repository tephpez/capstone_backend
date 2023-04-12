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


app.get('/', (req, res)=> {                 // MAKING THE LANDING PAGE
    res.send('SERVER INITIATED')
}) 

app.get('/users', (req, res)=> {                 // USERS
    res.send('USERS INITIATED')
}) 

app.get('/parks', (req, res)=> {                 // PARKS
    res.send('PARKS INITIATED')
}) 

app.get('/finds', (req, res)=> {                 // FINDS
    res.send('FINDS INITIATED')
})


app.get(
    '/middleware', 
    (req, res, next) => {
        console.log('REQUEST SENT')
    next()
    },
    (req, res) => {
    res.send('RESPONSE SUCCESS')
}
)