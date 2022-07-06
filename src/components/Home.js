import React from 'react'
import ReactPlayer from 'react-player'

const Home = () => {
  return (
    <>
    <div className='surfboard'>
      <ReactPlayer  className="surfboardd" 
      url={require('../img/reckVideo.mp4')}
      
      width='100%'
      controls
      />
    </div>
   
     <div className='grid-container-home'>
     
     <img className='home-picture1 flex testimonial1' src="/imgLogo/pukasBanner2.jpg" />
     <img className='home-picture flex testimonial' src="/imgLogo/pukasBanner3.jpg"/>
     <img className='home-picture flex testimonial' src="/imgLogo/t-shirt1.webp"/>
     <img className='home-picture flex testimonial' src="/imgLogo/short1.webp"/>
     <img className='home-picture flex testimonial' src="/imgLogo/t-shirt3.webp"/>
     </div>
</>
  )
}

export default Home
