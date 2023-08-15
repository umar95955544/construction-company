import React from 'react'
import PBanner from './ProjectComponents/PBanner/PBanner'
import AboutProject from './ProjectComponents/AboutProject/AboutProject'
import PImage from './ProjectComponents/PImage/PImage'
import PImageParagraph from './ProjectComponents/PImageParagraph/PImageParagraph'
import RelatedProject from './ProjectComponents/RelatedProject/RelatedProject'

function Project() {
  return (
    <>
    <PBanner />
    <AboutProject />
    <PImage />
    <PImageParagraph />
    <RelatedProject />
    </>
  )
}

export default Project