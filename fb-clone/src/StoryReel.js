import React from 'react'
import './StoryReel.css'
import Story from './Story'
function StoryReel() {
    return(
        <div className='storyReel'>
            <Story 
            profileSrc='https://res.cloudinary.com/danton/image/upload/v1613354056/daqolxws5ndbqe7oaaa0.jpg' 
            title='Nik' 
            image='https://res.cloudinary.com/danton/image/upload/v1613286956/norhw2qkqatntooofx4r.jpg'
            />
            <Story 
            profileSrc='https://res.cloudinary.com/danton/image/upload/v1613335366/nrkwmu5lqjedcm8nubof.jpg' 
            title='Dan' 
            image='https://res.cloudinary.com/danton/image/upload/v1610838123/wyvjfpi1rshjrn7h0uw5.jpg'
            />
            <Story 
            profileSrc='https://res.cloudinary.com/danton/image/upload/v1613250757/q1hgyy6hv5pzc0pfu0o5.png' 
            title='Oro' 
            image='https://res.cloudinary.com/danton/image/upload/v1610847297/ejggsll2bvvg7gy7ak7v.jpg'
            />
            <Story 
            profileSrc='https://res.cloudinary.com/danton/image/upload/v1613335420/wyasrou4ec4sjcbegbea.jpg' 
            title='Gow' 
            image='https://res.cloudinary.com/danton/image/upload/v1610847232/pcsaexjxarlgvo0vm6i8.jpg'
            />
            <Story 
            profileSrc='https://res.cloudinary.com/danton/image/upload/v1613286214/vpk7ywrwdv3mi4xszlq9.jpg' 
            title='Con' 
            image='https://res.cloudinary.com/danton/image/upload/v1613353983/kfamrlwa2qjpizwt9qd3.png'
            />

        </div>
    )
}

export default StoryReel;