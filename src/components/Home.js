import React from 'react'
import headerpic from '../assets/Screenshot from 2024-09-15 21-07-53.png'
import aboutimg from '../assets/Screenshot from 2024-09-15 21-10-11.png'
import Contact from './Contact'
import {  FaFacebook, FaPhoneSquareAlt, FaWhatsapp } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
export const Home = () => {
    const skills = ['Content Creation','SEO Optimization', 'Copywriting','Research Skills', 'Grammar and Editing', 'Social Media Management',
        'Technical Writing','Creativity'
    ]

    const half = Math.ceil(skills.length / 2)
    const skillColumn1 = skills.slice(0,half)
    const skillColumn2 = skills.slice(half)
    
    const styles = {
        bgprimary:{
            backgroundColor:'#ddd',
        }
    }
  return (
    <div className='container text-center' style={{marginTop: '200px'}}>
     <div className='row'>
        <div className='col-md-6'>
        <h3>Hi, Brian Kibet</h3>
        <h2 className='text-primary'>A Copywriter</h2>
        <div className='' style={{cursor: 'pointer'}}>
        <FaFacebook  size={25} color='blue' className='me-3'/> 
        <FaWhatsapp size={25} color='green' className='me-3'/>
         <FaPhoneSquareAlt size={25} className='me-3'/> <MdMail size={30} className='me-3'/>
         </div>
        </div>
        
        <div className='col-md-6'>
            <img className='img-fluid ' src={headerpic} alt='home' style={styles.bgprimary}/>
        </div>
     </div>
    <div  id='about' className='about' style={{marginTop: '100px'}}>
    <h1>About Me</h1>
    <div className='row'>
        <div className='col-md-6'>
            <img className='img-fluid' src={aboutimg} alt='about'/>
        </div>
        <div className='col-md-5'>
        <p>Welcome to Brian’s writing portfolio! With a passion for crafting compelling<br></br>
   narratives and persuasive copy, Brian specializes in transforming ideas into<br></br>
   impactful content. From captivating blog posts to persuasive marketing copy,<br></br>
   Brian brings a unique voice and meticulous attention to detail to every project.<br></br>
   With a background in Online writing, Brian understands<br></br>
   the nuances of effective communication and audience engagement. Driven by creativity<br></br>
   and a commitment to excellence, Brian consistently delivers content that not only informs<br></br>
   but also inspires. Explore the diverse range of work and see how Brian can help bring your vision to life.</p>
    
        </div>
    </div>
    </div>
    <div id='skill' className='container mt-5'>
   <h1 className='text-center mb-4'>My Skills</h1>
   <div className='row'>
    <div className='col-md-5'>
        <ul className='list-unstyled'>
            {skillColumn1.map((skill,index) =>(
                <li key={index} className='pb-2 mb-2'>{skill}</li>
            ))}
        </ul>
    </div>
    <div className='col-md-1 d-flex justify-content-center align-items-start'>
          <div className='vertical-line' style={{ height: '100%', borderColor: '#ccc', borderWidth: '1px' }}><hr></hr></div>
        </div>
    <div className='col-md-5'>
        <ul className='list-unstyled'>
            {skillColumn2.map((skill,index)=>(
                <li key={index} className=' pb-2 mb-2'>{skill}</li>
            ))}
        </ul>
    
    </div>
   </div>
</div>
<Contact />
    </div>
  )
}
