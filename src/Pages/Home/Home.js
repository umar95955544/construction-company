import React from 'react'
import HomeBanner from './HomeComponents/HomeBanner/HomeBanner'
import HomeDetails from './HomeComponents/HomeDetails/HomeDetails'
import HNoProject from './HomeComponents/HNoProject/HNoProject'
import HomeBannerMid from './HomeComponents/HomeBannerMid/HomeBannerMid'
import HTestimonials from './HomeComponents/HTestimonials/HTestimonials'
import HClientImages from './HomeComponents/HClientImages/HClientImages'

function Home() {
  return (
    <>
        <HomeBanner />
        <HomeDetails />
        <HNoProject />
        <HomeBannerMid />
        <HTestimonials />
        <HClientImages />
    </>
  )
}

export default Home