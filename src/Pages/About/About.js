import React from 'react'
import AboutBanner from './AboutComponents/AboutBanner/AboutBanner'
import AboutDescription from './AboutComponents/AboutDescription/AboutDescription'
import AboutBlackquote from './AboutComponents/AboutBlackquote/AboutBlackquote'
import AboutImageSec from './AboutComponents/AboutImage/AboutImage'

function About() {
  return (
    <>
    <AboutBanner/>
    <AboutDescription />
    <AboutImageSec />
    <AboutBlackquote />
    </>
  )
}

export default About