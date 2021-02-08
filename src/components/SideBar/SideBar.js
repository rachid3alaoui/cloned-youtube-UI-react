import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import SideBarRow from '../SideBarRow/SideBarRow'

import './sidebar.styles.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <SideBarRow title='Home' Icon={HomeIcon} selected />
      <SideBarRow title='Trending' Icon={WhatshotIcon} />
      <SideBarRow title='Subscriptions' Icon={SubscriptionsIcon} />
      <hr />
      <SideBarRow title='Library' Icon={VideoLibraryIcon} />
      <SideBarRow title='History' Icon={HistoryIcon} />
      <SideBarRow title='Your Videos' Icon={OndemandVideoIcon} />
      <SideBarRow title='Watch Later' Icon={WatchLaterOutlinedIcon} />
      <SideBarRow title='Liked videos' Icon={ThumbUpOutlinedIcon} />
      <SideBarRow title='Show more' Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </div>
  )
}

export default SideBar
