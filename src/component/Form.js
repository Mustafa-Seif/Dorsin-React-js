import React from 'react'

const Form = () => {

    return (
        <div className='container contain' id='contact'>
        <h1>GET IN TOUCH</h1>
        <div className='border'></div>
            <form >
                <input placeholder='Enter your name' type='text' required/>
                
                <input placeholder='Enter your email' type='text' required/>
                
                <input placeholder='Enter your subject...' type='text' required/>
                
                <textarea placeholder='' />
                <button>send Massage</button>
            </form>
        </div>
    )
}

export default Form