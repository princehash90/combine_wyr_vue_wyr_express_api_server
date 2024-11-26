const express =require('express')

const path = require('path')
//imports the routes in the routes/index.js
const indexRouter=require('./routes/index')
//creates web application
const app = express()

const staticFilePath = path.join(__dirname, 'client','dist')
//this the path
const staticFiles = express.static(staticFilePath)// telling express where these files are
app.use('/', staticFiles)
app.use('/', indexRouter)

// the port we want to use
const server = app.listen(process.env.PORT || 3000, function (){
    console.log('server running on port ',server.address().port);
});