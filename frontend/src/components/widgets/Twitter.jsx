import { TwitterTimelineEmbed} from 'react-twitter-embed';
import React from 'react';



const Twitter = () => { 
    return (
    <>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="NASA"
            options={{height: 400}}
        />

    </>
    );
};

export default Twitter;
