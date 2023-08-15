import React,{useContext} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import AboutProjectImg from '../../../../Assets/Images/AboutProject.svg'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext'

function AboutProject() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ?  `Content-dark`:`Content-light`}>
    <Container className='py-5'>
        <Row>
            <Col md={6} className='text-md-start text-center'>
                <h1 className='fw-bold'>About this Project</h1>
                <div className='py-3'>
                    <img src={YellowLine} alt=''/>
                </div>
                <p>
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus.
                <li>Maecenas ornare nisl</li>
                <li>A tortor ultrices bibendum</li>
                <li>Nulla fermentum</li>
                <li>Metus quis</li>
                <li>Sodales tristique</li>
                </p>
            </Col>
            <Col md={6}>
                <div className='ps-lg-5 ps-0'>
                  <img src={AboutProjectImg} alt='' style={{width: '100%'}}/>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default AboutProject