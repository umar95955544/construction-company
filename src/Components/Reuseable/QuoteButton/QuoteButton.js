import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../Button/Button'

function QuoteButton({heading,padding,backgroundColor,text,color,border,onclick}) {
  
  return (
   
    <Container fluid>    
    <Container>
        <Row className='py-4' >
            <Col lg={8} className='text-lg-start text-center'>
                <h1 className='fw-bold'>{heading}</h1>
            </Col>
            <Col lg={4} className='text-lg-end text-center'>
                <Button 
                backgroundColor={backgroundColor}
                text={text}
                padding={padding}
                color={color}
                border={border}
                onclick={onclick}/>
            </Col>
        </Row>
    </Container>
    </Container>
   
  )
}

export default QuoteButton