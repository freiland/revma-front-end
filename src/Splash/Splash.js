import React from 'react';
import image from '../img/splash_two.jpg';
import Search from '../SearchBar/SearchBar';

export default function Splash () {
  return (
    <div className = 'content-wrapper' >
      <img id='skyline' src={image} />
      
      <div className='text-wrapper'>
      <h1>find your room.<p><Search></Search></p> </h1>
      
      
      <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <input type="text" placeholder="Search.."></input>
    </div>

</div>
      
    </div>
    
  

  )

}