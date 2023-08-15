import React from 'react'
import CardsSection from '../../../../Components/Reuseable/CardsSection/CardsSection'
import Yellowline from '../../../../Assets/Images/NoProjectYellowLine.svg'



function Cards() {
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

export default Cards