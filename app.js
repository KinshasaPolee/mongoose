require('dotenv').config()
// Dependencies
const mongoose = require('mongoose')
const Tweet = require('./tweet.js')
// Global configuration
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
// Connect to MongoDB
mongoose.connect(mongoURI)

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

// const myFirstTweet = {
//     title: "Deep Thoughts",
//     body: "I am a BadAss",
//     author: "Kinshasa",
// };

// Tweet.create(myFirstTweet)
//     // if database transaction succeeds
//     .then((tweet) => {
//         console.log(tweet)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     })

// const manyTweets = [
//     {
//         title: "Deep Thoughts",
//         body: "Friends, I am the realest coder alive",
//         author: "Arthur",
//     },
//     {
//         title: "Sage Advice",
//         body: "Friends, I am awesome and you are too",
//         author: "Arthur",
//         likes: 20,
//     },
//     {
//         title: "Is TI the Jadakiss of the South",
//         body: "TI is severely underrated and we need to fix that expeditiously",
//         author: "Arthur",
//         likes: 40,
//     },
//     {
//         title: "Crypto",
//         body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
//         author: "Arthur",
//         likes: 162,
//     },
//     {
//         title: "Confusion",
//         body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
//         author: "Arthur",
//         likes: -100,
//     },
//     {
//         title: "Vespa",
//         body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
//         author: "Arthur",
//         likes: 2,
//     },
//     {
//         title: "Licensed",
//         body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
//         author: "Arthur",
//         likes: 3,
//     },
//     {
//         title: "Water",
//         body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
//         author: "Arthur",
//     },
// ];

// Tweet.insertMany(manyTweets)
//     // if database transaction succeeds
//     .then((tweets) => {
//         console.log(tweets)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     })

// Tweet.find({}, "title body")
//     // if database transaction succeeds
//     .then((tweets) => {
//         console.log(tweets)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     })

// Tweet.find({ title: "Deep Thoughts" })
//     // if database transaction succeeds
//     .then((tweet) => {
//         console.log(tweet)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     })

// Tweet.findById('65bbee23e72790acb715022e')
//     // if database transaction succeeds
//     .then((tweets) => {
//         console.log(tweets)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     })

// Tweet.findOneAndDelete({ title: "Deep Thoughts" })
//     // if database transaction succeeds
//     .then((tweet) => {
//         console.log(tweet)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     })

// Tweet.findOneAndUpdate(
//     { title: "Vespa" },
//     { sponsored: true },
//     { new: true })
//     // if database transaction succeeds
//     .then((tweet) => {
//         console.log(tweet)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     })

Tweet.countDocuments({ likes: { $gte: 20 } })
    // if database transaction succeeds
    .then((count) => {
        console.log(count)
    })
    // if database transaction fails
    .catch((error) => {
        console.log(error)
    })
    // close db connection either way
    .finally(() => {
        db.close()
    })