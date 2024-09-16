import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
    <div className='container'>
        <a className='navbar-brand' href="#">
            <h2 className='text-primary'>BriaNkibeT</h2>
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#about">About</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#skill">Skills</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#testimonies">Testimonies</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar
