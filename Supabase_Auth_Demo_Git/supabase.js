const { createClient } = require('@supabase/supabase-js')
const dotenv = require('dotenv')
dotenv.config() 

const supabase = createClient(process.env.SUPABASE_DOMAIN, process.env.SUPABASE_PUBLIC_KEY)

//getBooks() gets books from database

async function getBooks() { 
    const {data, error } = await supabase.from('books').select('*')
    if (error) {
        console.log(error)
    } else {
        return data
    }
}

//Login() login with email and password

async function login(email_, password_) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email_, 
        password: password_, 
    })
    if(error) {
        console.log(error)
    } else {
        console.log(data)
    }
}

//Logout() logout the user
async function logout() {
    const { error } = await supabase.auth.signOut()
    if(error) {
        console.log(error)
    } 
}

//export the functions you want expressclient.js to use
module.exports = {logout, getBooks, login}
