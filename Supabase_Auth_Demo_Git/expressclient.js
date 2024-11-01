const express = require('express')
const port = 3000
const app = express() 
const path = require('path');

app.use(express.urlencoded({ extended: true })); 

//require supabase functions (not defined/implemented yet)
const {logout, login, getBooks} = require('./supabase')

app.get('/', (req, res) => {
  res.send('welcome to my app')
})

//form where user can login with their email and password
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

//post email and password and login
app.post('/login/post', async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    try {
      await login(email, password)
      //test if we're able to access the data from getBooks() 
      //Since we're authenticated, we should see this data
      const data = await getBooks()
      res.send(data)
    } catch (error) {
      console.log(error) 
    }
})

//logout
app.get('/logout', async (req, res) => {
    try {
      await logout() 
      //test if we're able to access the data from getBooks() as an unauthenticated user
      //Should fail -- returns an empty list 
      const data = await getBooks()
      res.send(data)
    } catch (error) {
      console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
