const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("Hello from the Express server!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/api/posts', (req,res) => {
    const posts = [
        //below we're creating test blog posts that will be replaced with a call to the database
        {id:1, title: 'Hello World', content: 'This is my first blog post'},
        {id:2, title: 'Another Post', content: 'This is my second blog post'},
    ];
//this route will return an array of blogposts as a JSON when its requested from the client
    res.json(post);
});