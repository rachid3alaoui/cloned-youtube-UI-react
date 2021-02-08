import React from 'react'

import './sidebarrow.styles.css'

const SideBarRow = ({ Icon, title, selected }) => {
  return (
    <div className={`sidebar__row ${selected && `selected`}`}>
      <Icon className='sidebar__row__icon' />
      <h4 className='sidebar__row__title'>{title}</h4>
    </div>
  )
}

export default SideBarRow
