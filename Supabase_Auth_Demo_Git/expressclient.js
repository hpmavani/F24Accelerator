
const express = require('express')
const port = 3000
const app = express() 
const path = require('path');

//body parser, necessary for using req.body to get parameters
app.use(express.urlencoded({ extended: true })); 

//require supabase functions (not defined/implemented yet)
const {logout, login, getAllBooksAndAuthor} = require('./supabase')

//home page 
app.get('/', (req, res) => {
  res.send('welcome to my app!')
  logout().then((result) => {
    console.log('Logged out!')
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

