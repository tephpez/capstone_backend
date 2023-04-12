// ZOOM/CLASS
const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express()
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})





// // PIXIDREAMS
// const express = require("express");
// const app = express();
// const cors = require("cors");

// const AppRouter = require("./routes/AppRouter");

// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => res.json({ message: "Server Works" }));

// app.use("/api", AppRouter);

// app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));

