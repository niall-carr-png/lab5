// Defining constants
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//Output for localhost landing page
app.get('/', (req, res) => {
    res.send('Hello World!')
})



//Form variables for localhost/test
//Passes variable to /name
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

//Variable received from /test
app.post('/name', (req, res)=>{
    console.log(req.body);
    res.send('Hello ' +req.body.fname+ ' '+req.body.lname+' from POST');
})

//Receives variable from /test
app.get('/name', (req, res)=>{
    console.log(req.query.fname);
    //Implemented through address
    res.send('Hello ' +req.query.fname+ ' ' +req.query.lname);
})

//JSON output for localhost/api/books
 app.get('/api/books', (req, res) =>{
     const books = [
         {
         "title": "Learn Git in a Month of Lunches",
         "isbn": "1617292419",
         "pageCount": 0,
         "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        },
        ];
    
            
    res.status(200).json({
        mybooks:books
    })
})

//Output for localhost/datarep
app.get('/datarep', (req, res)=>{
    res.send('Hello from DataRep');
})

//Output for localhost/hello/[name]
//Insert any name into address to display it on page
app.get('/hello/:name', (req, res)=>{
    console.log(req.params.name);
    res.send('Hello '+req.params.name);
})

//Message for running on terminal
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})