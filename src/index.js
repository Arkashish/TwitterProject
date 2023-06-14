import express from "express"
import { connect } from "./config/database.js";
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtag.js";
import TweetRepository from "./repository/tweet-repository.js";
const app = express();



app.listen(3000, async () => {
    console.log("server Started at 3000");
    // mongo db connection establishment
    connect();

    console.log("Mongo DB connected");


    // Tweet.create({
    //     content: "This is my second tweet",
    //     likes: 27,
    //     noOfRetweets: 9,
    //     comment: "This is my second comment"
    // })
    // Hashtag.create({
    //     text: "travel",
    //     tweets: ['64873e05e6a9eec5f165596e']
    // })

    const tweetRepo = new TweetRepository();
    // let tweets = await tweetRepo.getAllTweets();
    // let tweet = await tweetRepo.getTweet('648979c45b652ba64319bf9b');
    let deltweet = await tweetRepo.deleteTweet({
        _id: '648979c45b652ba64319bf9b'
    });
    // console.log('Twwet is: ', tweet);
    console.log( deltweet);
})

