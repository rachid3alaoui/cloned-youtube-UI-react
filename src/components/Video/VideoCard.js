import React from 'react'
import './videocard.styles.css'
import Avatar from '@material-ui/core/Avatar'

const VideoCard = ({ image, title, channel, views, timestamp }) => {
  return (
    <div className='videocard'>
      <img src={image} alt='' />
      <div className='videoCard__info'>
        <Avatar
          className='videoCard__avatar'
          alt='Lofi'
          src='https://yt3.ggpht.com/ytc/AAUvwnjToEFDnQETlCMEOWOaiDNzqDkdhtXI1XgA5DN6vA=s48-c-k-c0x00ffffff-no-rj'
        />
        <div className='video__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
