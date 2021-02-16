import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                title='Nikhil Yadav' 
                src='https://res.cloudinary.com/danton/image/upload/v1613354056/daqolxws5ndbqe7oaaa0.jpg'  
            />
            
            <SidebarRow 
                title='COVID-19 Information Center' 
                Icon = {LocalHospitalIcon} 
            />

            <SidebarRow 
                title='Pages' 
                Icon = {EmojiFlagsIcon} 
            />      

            <SidebarRow 
                title='Friends' 
                Icon = {PeopleIcon} 
            />      
            <SidebarRow 
                title='Messenger' 
                Icon = {ChatIcon} 
            />      
            <SidebarRow 
                title='Marketplace' 
                Icon = {StorefrontIcon} 
            />      
            <SidebarRow 
                title='Videos' 
                Icon = {VideoLibraryIcon} 
            />      
            <SidebarRow 
                title='More' 
                Icon = {ExpandMoreOutlinedIcon} 
            />      
            
        </div>
    )
}

export default Sidebar
