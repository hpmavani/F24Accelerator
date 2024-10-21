
const express = require('express')
const port = 3000
const app = express() 
const path = require('path');

app.use(express.urlencoded({ extended: true })); 

//require supabase functions (not defined/implemented yet)
const {logout, login, getAllBooksAndAuthor} = require('./supabase')

app.get('/', (req, res) => {
  res.send('welcome to my app')
  logout().then((result) => {
    console.log('Logged out!')
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

