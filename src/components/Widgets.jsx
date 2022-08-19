import React from 'react';
import '../styles/Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed"
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__search-icon'/>
                <input type="text" placeholder='Search Twitter' />
            </div>
            <div className="widgets__widget--container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed 
                    tweetId={"1560720224588120064"}
                />
                
                <TwitterTimelineEmbed 
                    sourceType='profile'
                    screenName='elonmusk'
                    options={{height: 1}}
                />

                <TwitterShareButton 
                    url={"https//facebook.com/cleverprogrammer"}
                    options={{text: "", via:"elonmusk"}}
                />
            </div>
        </div>
    );
}

export default Widgets;
