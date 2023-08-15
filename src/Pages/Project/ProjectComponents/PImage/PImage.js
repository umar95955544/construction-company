import React, { useContext } from 'react'
import PMainImage from '../../../../Assets/Images/PImage.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext';

function PImage() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `Content-dark` : `Content-light`}>
      <Container className='py-4'>
        <Row>
          <Col>
            <div className='text-center'>
              <img src={PMainImage} alt='' style={{ width: '100%' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PImage