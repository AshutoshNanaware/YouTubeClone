import React from 'react'
import "./SideBarRow.css"

function SideBarRow({Icon,title}) {
  return (
    <div className='sidebarrow'>
        <Icon className='sidebar__icon'/>
        <h2 className='sidebar__title'>{title} </h2>
    </div>
  )
}

export default SideBarRow