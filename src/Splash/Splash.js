import React from 'react';
import image from '../img/splash_two.jpg';
import Search from '../SearchBar/SearchBar';

export default function Splash () {
  return (
    <div className = 'content-wrapper' >
      <img id='skyline' src={image} />
      
      <div className='text-wrapper'>
      <h1>find your room.<p><Search></Search></p> </h1>
</div>
      
    </div>
    
  

  )

}