import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender.js'
import './Feed.css'
import './MessageSender.css'
function Feed() {
    return (
        <div className = "feed">
            <StoryReel />
            <MessageSender />
                {/* info */}
                    {/* postinfo */}
                    {/* postphoto */}
                {/* activity */}
                    {/* entbar */}

        </div>
    )
}

export default Feed
