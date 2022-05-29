import React from 'react'
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'

const People = () => {
  return (
    <div className='people container'>
        <h2>BEHIND THE PEOPLE</h2>
        <div className='border'></div>
        <p>It is a long established fact that create category leading brand experiences a reader will be distracted <br></br>by the readable content of a page when looking at its layout.</p>
        <div className='people-cards'>
        
          <div className='people-card'>
            <img src={img1}/>
            <h5>Frank Johnson</h5>
            <p>CEO</p>
          </div>

          <div className='people-card'>
            <img  src={img2}/>
            <h5>Elaine Stclair</h5>
            <p>DESIGNER</p>
          </div>

          <div className='people-card'>
            <img  src={img3}/>
            <h5>Wanda Arthur</h5>
            <p>DEVELOPER</p>
          </div>

          <div className='people-card'>
            <img  src={img4}/>
            <h5>Joshua Stemple</h5>
            <p>MANAGER</p>
          </div>
          
        </div>
    </div>
  )
}

export default People