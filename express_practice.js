//Set up your express configuration: 
/*
    1. Make sure npm and express are installed on your coding environment 
    2. Set up express within this JS file
        - app.listen(port, ...) will confirm that your app is up and running
        - To actually see your app in your browser, go to: http://localhost:<port> 
*/ 

//...

app.use(express.urlencoded({ extended: true })); 

// Below is a list of books in your catalog, which includes the ISBN, title, and author of each book
// Note: This structure is a LIST of DICTIONARIES
let books = [
    {ISBN: "0195153448", title: "Classical Mythology", author: "Mark P. O. Morford"},
    {ISBN: "1552041778", title: "Jane Doe", author: "R. J. Kaiser"},
    {ISBN: "0446310786", title: "To Kill a Mockingbird", author: "Harper Lee"}, 
    {ISBN: "0451525221", title: "Scarlet Letter", author: "Nathaniel Hawthorne"},
    {ISBN: "0451526341", title: "Animal Farm", author: "George Orwell"}, 
    {ISBN: "0451523415", title: "Little Women (Signet Classic)", author:"Louisa May Alcott"},
]

/*Your form is located on the path "/form"*/

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
}) 

/* Using app.get(...), display the book titles and authors (not the ISBN) from the dictionary and display it to the web app
    Tips: 
     - You can get iterate through a list using for(let i of list) {...}
     - You can get items from a dictionary using '.' notation 
        EX: If we have a dictionary called movie, movie.name will get the name of the movie
*/

//... 

/*Allow the user to submit their favorite book using app.post(...)
    - Take the user's name and the title of their favorite book
    - To confirm their submission, display a response: "<user>'s favorite book is <book_title>"
    Tips: 
     - req.body gets all the information submitted by the user
*/

//...

