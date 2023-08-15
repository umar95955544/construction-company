import React from 'react'
import ServicesBanner from './ServicesComponents/ServicesBanner/ServicesBanner'
import ServicesQuote from './ServicesComponents/ServicesQuote/ServicesQuote'
import ServicesCards from './ServicesComponents/ServicesCards/ServicesCards'
import ServicesDetails from './ServicesComponents/ServicesDetails/ServicesDetails'

function Services() {
  return (
   <>
   <ServicesBanner />
   <ServicesQuote />
   <ServicesDetails />
   <ServicesCards />
   </>
  )
}

export default Services