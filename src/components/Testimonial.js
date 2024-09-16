import React from 'react'
import john from '../assets/Screenshot from 2024-09-15 21-07-53.png'
import mark from '../assets/Screenshot from 2024-09-15 21-10-11.png'
import jane from '../assets/Screenshot from 2024-09-15 21-14-35.png'
const Testimonial = () => {
    return (
        <div className='container mt-5'>
        <h1>Testimonies</h1>
        <div className='row  justify-content-center ' style={{gap: '3px'}}>
          <div className='card mb-4' style={{width: '170px'}}>
              <img className='img-fluid card-img' src={mark} alt='john'/>
              <div className='card-body'>
                  <h4>Alex John</h4>
                  <p>Collaborating with Brian was a fantastic experience; his writing exceeded every expectation and brought fresh perspectives to the project.

</p>
              </div>
          </div>
          <div className='card mb-4' style={{width: '170px'}}>
              <img className='img-fluid card-img' src={jane} alt='john'/>
              <div className='card-body'>
                  <h4>Max Astrid</h4>
                  <p>Working with Brian was a true pleasure—his insightful content and knack for capturing the essence of the topic made a significant impact.</p>
              </div>
          </div>
          <div className='card mb-4' style={{width: '170px'}}>
              <img className='img-fluid card-img' src={john} alt='john'/>
              <div className='card-body'>
                  <h4>Patel Eric</h4>
                  <p>Teaming up with Brian was a highlight; his dedication and exceptional writing skills really elevated the quality of our work.</p>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Testimonial
