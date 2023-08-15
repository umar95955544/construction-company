import React from 'react'
import PortfolioBanner from './PortfolioComponents/PortfolioBanner/PortfolioBanner'
import PortfolioCards from './PortfolioComponents/PortfolioCards/PortfolioCards'
import HeadingSection from './PortfolioComponents/HeadingSection/HeadingSection'

function Portfolio() {
  return (
    <>
        <PortfolioBanner />
        <PortfolioCards />
        <HeadingSection />
    </>
  )
}

export default Portfolio