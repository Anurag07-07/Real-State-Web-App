const express = require('express')
const dotenv = require('dotenv')
const { DatabaseConnection } = require('./database/dbConnect')
const AuthRoute = require('./routes/auth.route')
const cors = require('cors')
const app = express()
dotenv.config()
// Serve all files inside the public folder directly to the browser.
app.use(express.static('public'))
app.use(cors())

const PORT = process.env.PORT || 8000
app.use(express.json())
app.use('/auth',AuthRoute)

DatabaseConnection()

app.listen(PORT,(err)=>{
  if (!err) {
    console.log(`Server Start at http://localhost:${PORT}`);
  }else{
    console.log(err);
  }
})