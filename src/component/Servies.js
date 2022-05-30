import React, { useRef }  from 'react'


const servies = () => {
    

    window.addEventListener("scroll",()=>{
        const servies =document.querySelector(".servies")
        const cards =document.querySelector(".servies-cards")
        if (window.scrollY >= servies.offsetTop -50 ) {
            cards.classList.add("show-servies")
        }
        else{
            cards.classList.remove("show-servies")

        }

    })
    
    
    return (
        <section className='servies container' id='servies'>
            <div className='servies-text'>
                <h2>Our Services</h2>
                <div className='border'></div>
                <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences<br /> that have meaning and add a value for our clients.</p>
            </div>
            <div className='servies-cards' >
                <div className='servies-card'>
                    <span><i class="fa-solid fa-gem"></i></span>
                    <h4>Digital Design</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
                </div>

                <div className='servies-card'>
                    <span><i class="fa-solid fa-book"></i></span>
                    <h4>Digital Design</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
                </div>

                <div className='servies-card'>
                    <span><i class="fa-solid fa-briefcase"></i></span>
                    <h4>Digital Design</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
                </div>

                <div className='servies-card'>
                    <span><i class="fa-solid fa-bullhorn"></i></span>
                    <h4>Digital Design</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
                </div>

                <div className='servies-card'>
                    <span><i class="fa-solid fa-gem"></i></span>
                    <h4>Digital Design</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
                </div>

                <div className='servies-card'>
                    <span><i class="fa-solid fa-piggy-bank"></i></span>
                    <h4>Digital Design</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
                </div>
            </div>
        </section>
    )
}

export default servies


// window.onscroll = function name() {
    //     const servies = document.querySelector(".servies")
    //     const cards = document.querySelector(".servies-cards")
    //     if (window.scrollY >= servies.offsetTop ) {
    //         cards.style.display="flex"
    //         cards.style.opacity="1"
    //         cards.style.transition="5s"
            
    //     }
    // }