const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
  console.log( `${PORT} running successfully` )
})

app.get('/', (req, res)=> {
    res.send('SERVER INITIATED')
}) // MAKING THE LANDING PAGE