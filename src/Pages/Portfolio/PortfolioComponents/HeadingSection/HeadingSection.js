import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function HeadingSection() {
    const style ={
        backgroundColor: '#FFB400',  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  
        padding: '4rem'
    }
  return (
    <Container fluid style={style}>
        <Row>
            <Col>
                <h1 className='fw-bold text-center'>Have a Project in Mind?<br/>
Let’s Get Building!</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default HeadingSection