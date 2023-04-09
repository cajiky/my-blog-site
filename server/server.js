require('dotenv').config({ path: '../.env' });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./models/Post");

//authentication
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("./models/User");
const userRoutes = require('./routes/userRoutes'); 

//Routes
const commentRoutes = require('./routes/commentRoutes');


const secretKey = process.env.SECRET_KEY;
console.log('Secret key:', secretKey);

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };

const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api', commentRoutes);
const port = process.env.PORT || 5000;

const mongoURI = "mongodb+srv://cajiky:Dood1025@my-blog.fe7x9qh.mongodb.net/?retryWrites=true&w=majority";

//Middleware

app.use('/api/users', userRoutes);



mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Successfuly connected to MongoDB Atlas!");
});



app.get("/", (req, res) => {
    res.send("Hello from the Express server!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching posts:', err });
    }
});

//route to fetch a single post with a specific id
app.get("/api/posts/:id", async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await Post.findById(postId);
        console.log(postId);
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: "error fetching post:", err });
    }
});

// route to sumbit a new post
app.post('/api/posts', async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            image: req.body.image,
        });

        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (err) {
        res.status(500).json({ message: 'Error creating post:', err });
    }
});

//Login route
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password.'});
        }
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: 'User logged in successfully.' });
    } catch (err) {
        console.log('Error in login route:', err); // Add this line for more logging
        res.status(500).json({ message: 'Error loggin in', err });
    }
});


//Logout route
app.post('/api/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'User logged out successfuly.' });
});

  