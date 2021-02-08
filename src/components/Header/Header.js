import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import './header.styles.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          className='header__logo'
          src='https://news-cdn.softpedia.com/images/news2/youtube-is-finally-getting-a-dark-mode-rolling-out-soon-to-ios-and-android-520209-2.jpg'
          alt=''
        />
      </div>
      <div className='header__input'>
        <input type='text' placeholder='Search' />
        <div className='search_button'>
          <SearchIcon className='header__inputButton' />
        </div>
      </div>
      <div className='header__icons'>
        <NotificationsIcon />
        <VideoCallIcon />
        <AppsIcon />
        <AccountCircleIcon />
      </div>
    </div>
  )
}

export default Header
