import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../../../../Components/Reuseable/Button/Button'

function ContactQuote() {
  const style = {
    color: '#FFB400'
  }
  const contactButton =
  {
    heading: 'Get a Quote For Your Project',
    padding: '0.8rem 1.0rem',
    backgroundColor: 'transparent',
    text: 'ONLINE ESTIMATE FORM',
    color: '#FFB400',
    border: '5px solid #FFB400',
  };
  return (
    <Container>
      <Row className='p-4'>
        <Col lg={8} className='text-lg-start text-center'>
          <h1 className='fw-bold' style={style}>Call: (541) 931-3526</h1>
          <h3>We Can’t Wait to Make Your Ideas a Reality</h3>
        </Col>
        <Col lg={4} className='d-flex align-items-center justify-content-end justify-content-center'>
          <Button
            heading={contactButton.heading}
            padding={contactButton.padding}
            backgroundColor={contactButton.backgroundColor}
            text={contactButton.text}
            color={contactButton.color}
            border={contactButton.border}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default ContactQuote