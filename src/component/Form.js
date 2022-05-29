import React from 'react'

const Form = () => {
    return (
        <div className='container contain'>
        <h1>GET IN TOUCH</h1>
        <div className='border'></div>
            <form >
                <input placeholder='Enter your name' type='text'/>
                <input placeholder='Enter your email' type='text'/>
                <input placeholder='Enter your subject...' type='text'/>
                <textarea placeholder='' />
                <button>send Massage</button>
            </form>
        </div>
    )
}

export default Form