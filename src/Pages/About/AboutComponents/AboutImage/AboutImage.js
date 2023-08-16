import React, {useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutImage1 from '../../../../Assets/Images/AboutImage.svg'
import RightIconYellowImg from '../../../../Assets/Images/RightIconYellow.svg'
import BannerRight from '../../../../Components/Reuseable/BannerRight/BannerRight'
import Button from '../../../../Components/Reuseable/Button/Button'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext'
import Styles from './AboutImage.module.scss'

function AboutImage() {
  const { darkMode } = useContext(DarkModeContext);
  const aboutLeftData = [
    {
      text: 'Our Services',
    },
    {
      image: RightIconYellowImg,
      heading: 'Eco Friendly Construction',
      paragraph: 'Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    }, {
      image: RightIconYellowImg,
      heading: 'The Newest Technology Repairs',
      paragraph: 'Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    },
    {
      image: RightIconYellowImg,
      heading: 'High Quality Construction Management',
      paragraph: 'Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    },

  ];
  const style = {
    backgroundColor: '#F7F7F7'
  }
  
  const contactButton =
  {
    padding: '0.5rem 2.0rem',
    backgroundColor: 'transparent',
    text: 'FREE QUOTE',
    color: '#FFB400',
    border: '5px solid #FFB400',
    onclick: '/contact'
  };
  return (
    <Container fluid style={style} className={`gx-0 ${darkMode ? `Content-dark` : `Content-light`}`}>
      <Row className='gx-0'>
        <Col lg={4} className={Styles.ColOne}>

          <BannerRight
            bannerRightData={aboutLeftData}
          />
          <div className='d-flex justify-content-lg-end justify-content-center pt-4'>
            <Button
              heading={contactButton.heading}
              padding={contactButton.padding}
              backgroundColor={contactButton.backgroundColor}
              text={contactButton.text}
              color={contactButton.color}
              border={contactButton.border}
              onclick={contactButton.onclick}
            />
          </div>


        </Col>
        <Col lg={8} >
          <Row className='gx-0'>
            <img src={AboutImage1} alt='' />
          </Row>
          <Row className='gx-0'>
            <Col md={6} className="text-center p-2" style={{ backgroundColor: '#FFB400' }}>
              <h1 className='fw-bold'>12</h1>
              <p>YEARS ESTABLISHED</p>
            </Col>
            <Col md={6} className="text-center p-2" style={{ backgroundColor: '#2A2A2A' }}>
              <h1 className='text-white fw-bold'>250</h1>
              <p className='text-white'>COMPLETED PROJECTS</p>
            </Col>
          </Row>
          <Row className='gx-0'>
            <Col md={6} className="text-center p-2" >
              <h1 className='fw-bold'>24</h1>
              <p>FIELD WORKERS</p>
            </Col>
            <Col md={6} className="text-center p-2" >
              <h1 className='fw-bold'>18</h1>
              <p>OFFICE STAFF</p>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  )
}

export default AboutImage