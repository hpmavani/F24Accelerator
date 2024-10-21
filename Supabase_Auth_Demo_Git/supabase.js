const { createClient } = require('@supabase/supabase-js')
const dotenv = require('dotenv')
dotenv.config() 

const supabase = createClient(process.env.SUPABASE_DOMAIN, process.env.SUPABASE_PUBLIC_KEY)

//read: foreign key example 
async function getAllBooksAndAuthor() { 
    const {data, error} = await supabase.from('books').select(`title, rating, authors(name)`)
    if(error) {
        console.log(error)
    } 
    return data
}

//export the functions you want expressclient.js to use
//module.exports = {}
