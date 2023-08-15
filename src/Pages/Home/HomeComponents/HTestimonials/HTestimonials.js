import React from 'react'
import CardsSection from '../../../../Components/Reuseable/CardsSection/CardsSection'
import Yellowline from '../../../../Assets/Images/NoProjectYellowLine.svg'



function HTestimonials() {
    const cardTop = {
        heading:'Client Testimonials',
        image: Yellowline
    }
  return (
    <CardsSection 
        heading={cardTop.heading}
        image={cardTop.image}
    />
  )
}

export default HTestimonials