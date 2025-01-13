import React from 'react'
import im1 from "../../assets/photo/Tree house/luxuryroom.jpg"
import Room1 from './Room1'
import Room2 from './Room2'
function Room() {
  return (
    <div>

<div className="relative w-full h-[40em] overflow-hidden">
  <div 
    className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center" 
    style={{ backgroundImage: `url(${im1})` }}
  ></div>
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <h1 className="text-white text-4xl md:text-6xl">Choose Your Rooms</h1>
  </div>
</div>


      <Room1/>
      <Room2/>
    </div>
  )
}

export default Room