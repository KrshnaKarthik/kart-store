import React from 'react';
import './menu-Item.styles.scss';
//below instead of writing pops and when calling in line 6 instead of calling props.title below is the destructred code
//style takes an object
//imageurl must be a string, so its a string interpolated value
//class name size and menu item both declared with same class name using javascript line8
const MenuItem = ({title,size,imageUrl}) => (
    <div className={`${size} menu-item`} >
      <div className='background-image' 
      style={{
        backgroundImage:`url(${imageUrl})`}}  />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;