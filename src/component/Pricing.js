import React from 'react'


const Pricing = () => {
  return (
    <section className='pricing container' id='Pricing'>
    <div className='text-pricing'>
    <h2>Our Pricing</h2>
    <div className='border'></div>
    <p>Call to action pricing table is really crucial to your for your business website.</p>
    </div>
    <div className='cards-pricing'>
        <div className='card-pricing'>
        <h5>Economy</h5>
        <h1 >$9.90</h1>
        <p>Bandwidth: <span>1GB</span> </p>
        <p>Onlinespace : <span>50MB</span> </p>
        <p>Support: <span>No</span> </p>
        <p>Domain: <span>1</span></p>
        <p>Hidden Fees: <span>No</span> </p>
        <button>Join Now</button>
        </div>

        <div className='card-pricing'>
        <h5>DELUXE</h5>
        <h1>$19.90</h1>
        <p>Bandwidth: <span>1GB</span></p>
        <p>Onlinespace : <span>50MB</span> </p>
        <p>Support: <span>No</span> </p>
        <p>Domain: <span>1</span> </p>
        <p>Hidden Fees: <span>No</span> </p>
        <button>Join Now</button>
        </div>

        <div className='card-pricing'>
        <h5>ULTIMATE</h5>
        <h1>$29.90</h1>
        <p>Bandwidth: <span>1GB</span> </p>
        <p>Onlinespace : <span>50MB</span> </p>
        <p>Support: <span>No</span></p>
        <p>Domain: <span>1</span> </p>
        <p>Hidden Fees: <span>No</span> </p>
        <button>Join Now</button>
        </div>
        

    </div>

    </section>
  )
}

export default Pricing