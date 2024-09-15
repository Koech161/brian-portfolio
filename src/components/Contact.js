import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='container mt-5'>
    <div>
        <h1 className='mb-4'>Contact Me</h1>
        <div className='form-group'>
            <label htmlFor='email'>Enter email</label>
            <input 
                type='email' 
                id='email'
                placeholder='example@gmail.com' 
                className='form-control' 
            />
        </div>
        <div className='form-group'>
            <label htmlFor='message'>Enter your message</label>
            <textarea 
                id='message'
                className='form-control' 
                rows='4'
            ></textarea>
        </div>
        <button 
            className='btn btn-dark text-white' 
            type='submit'
        >
            Submit
        </button>
    </div>
</div>

  )
}

export default Contact
