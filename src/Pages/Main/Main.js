import React from 'react'
import Banner from './MainComponents/Banner/Banner'
import QuoteSection from './MainComponents/QuoteSection/QuoteSection'
import NoProject from './MainComponents/NoProject/NoProject'
import ThreeCards from './MainComponents/ThreeCards/ThreeCards'
import ClientImages from './MainComponents/ClientImages/ClientImages'
import VideoSection from './MainComponents/VideoSection/VideoSection'
import Accordion from './MainComponents/Accordion/Accordion'
import Cards from './MainComponents/Cards/Cards'

function Main() {
  return (
    <>
    <Banner />
    <QuoteSection />
    <NoProject />
    <ThreeCards />
    <VideoSection />
    <Accordion />
    <Cards />
    <ClientImages />
    </>
  )
}

export default Main