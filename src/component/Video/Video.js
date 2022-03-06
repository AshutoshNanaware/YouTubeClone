import React from 'react'
import "./Video.css"
import SideBarRow from '../SideBarRow/SideBarRow'
import Avatar from '@mui/material/Avatar';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
function Video({image,title,channel,views,timestamp,channelImage}) {
  return (

    <div className='video'  >
        <div className='before__hover'>

   
              <img className='video__thumbnail' src={image} alt="" />
              <div className='video__info'>
                  <Avatar className='video__avatar' alt={channel} src={channelImage} />
                  <div className='video__text'>
                      <h4>{title}</h4>
                      <p>{channel}</p>
                      <p>
                          {views} . {timestamp}
                      </p>
                  </div>

              </div>
        </div> 
        <div className='hover__display'>
      <img className='video__thumbnail' src={image} alt="" />
      <div className='video__info'>
          <Avatar className='video__avatar' alt={channel} src={channelImage} />
          <div className='video__text'>
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>
                  {views} . {timestamp}
              </p>
          </div>
          

      </div>
      <div className='video__button'>
      <SideBarRow Icon={WatchLaterIcon}  title="Watch Later"/>
      <SideBarRow Icon={AddToQueueIcon}  title="Add To Queue" />
      </div>

    </div>
    </div>







  )
}

export default Video