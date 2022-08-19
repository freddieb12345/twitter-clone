import React, { useState, useEffect } from 'react';
import "../styles/TweetBox.css"
import { Avatar, Button } from '@material-ui/core'
import PersonIcon from '@mui/icons-material/Person';
import {db, auth}  from "../firebase"
import { addDoc, collection } from 'firebase/firestore';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e => {
        e.preventDefault()
        const post = {
            displayName: "Freddie Brewin",
            username: "freddieb12345",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            timestamp: Date.now()
        };

        addDoc(collection(db,"posts"), post)
        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className='tweet__box'>
            <form>
                <div className='tweet__box--input'>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                    <input 
                        onChange={e => setTweetMessage(e.target.value)}
                        type="text" 
                        placeholder="What's happening?" 
                        value={tweetMessage}
                    />
                </div>
                <input 
                    type="text" 
                    placeholder="Optional: Enter Image URL" 
                    className='tweet__box--input-image'
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                />
                <Button onClick={sendTweet} type="submit" className='tweet__box--tweet-button'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
