import React from 'react'
import ContactQuote from './ContactComponents/ContactQuote/ContactQuote'
import ContactBanner from './ContactComponents/ContactBanner/ContactBanner'
import ContactMap from './ContactComponents/ContactMap/ContactMap'
import ContactAccordion from './ContactComponents/ContactAccordion/ContactAccordion'

function Contact() {
 
  return (
    <>
    <ContactBanner />
    <ContactQuote />
    <ContactAccordion />
    <ContactMap />
    </>
  )
}

export default Contact