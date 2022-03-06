import React from 'react'
import SideBarRow from '../SideBarRow/SideBarRow'
import "./SideBar.css"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function SideBar() {
  return (
    <div className='sidebar'>
      <SideBarRow Icon={HomeIcon}  title="Home"/> 
      <SideBarRow Icon={ExploreIcon}  title="Explore"/>
      <SideBarRow Icon={SubscriptionsIcon}  title="Subscriptions"/>
      <hr></hr> 
      <SideBarRow Icon={VideoLibraryIcon}  title="Library"/> 
      <SideBarRow Icon={HistoryIcon}  title="History"/>
      <SideBarRow Icon={OndemandVideoIcon}  title="Your video"/>
      <SideBarRow Icon={WatchLaterIcon}  title="Watch Later"/>
      <SideBarRow Icon={ThumbUpIcon}  title="Liked"/>
      <SideBarRow Icon={ExpandMoreIcon}  title="Show More"/>
        <hr></hr>
      </div>

  )
}

export default SideBar