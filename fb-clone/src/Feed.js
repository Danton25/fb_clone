import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import './Feed.css'
import './MessageSender.css'
import Post from './Post'
function Feed() {
    return (
        <div className = "feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://res.cloudinary.com/danton/image/upload/v1613354056/daqolxws5ndbqe7oaaa0.jpg"
                image="https://res.cloudinary.com/danton/image/upload/v1613354056/daqolxws5ndbqe7oaaa0.jpg"
                username="Nikhil Yadav"
                timestamp="timestamp"
                message="this is a message"
            />
            <Post />
            <Post />

        </div>
    )
}

export default Feed
