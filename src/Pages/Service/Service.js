import React from 'react'
import ServiceBanner from './ServiceComponent/ServiceBanner/ServiceBanner'
import TwoParagraphs from './ServiceComponent/TwoParagraphs/TwoParagraphs'
import ServiceVideo from './ServiceComponent/ServiceVideo/ServiceVideo'
import ServiceCards from './ServiceComponent/ServiceCards/ServiceCards'
import ServiceAccordion from './ServiceComponent/ServiceAccordion/ServiceAccordion'

function Service() {
  return (
    <>
        <ServiceBanner />
        <TwoParagraphs />
        <ServiceVideo />
        <ServiceCards />
        <ServiceAccordion />
    </>
  )
}

export default Service