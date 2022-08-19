import React, { useState, useEffect } from 'react';
import '../styles/Feed.css'
import Post from './Post';
import TweetBox from './TweetBox';
import { collection, addDoc, getDocs, getDoc, doc, where, updateDoc, deleteDoc, docs, onSnapshot, query, Firestore } from 'firebase/firestore';
import {db, auth}  from "../firebase"
import { async } from '@firebase/util';
import FlipMove from "react-flip-move"

const Feed = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "posts"));
        onSnapshot(q, (querySnapshot) => {
            const queryPosts = [];
            querySnapshot.forEach((doc) => {
                queryPosts.push(doc.data())
            })
            const sortedQueryPosts = queryPosts.sort((a,b) => b.timestamp - a.timestamp)
            console.log(sortedQueryPosts)
            setPosts(sortedQueryPosts)
        })
    }, []);

    return (
        <div className='feed'>
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <FlipMove>
                {posts.map((post) => (
                    <Post 
                        displayName={post.displayName} 
                        username={post.username} 
                        verified={post.verified}  
                        text={post.text} 
                        avatar={post.avatar}
                        image={post.image}
                        key={post.timestamp}
                    />
                ))}
            </FlipMove>


        </div>
    );
}

export default Feed;
