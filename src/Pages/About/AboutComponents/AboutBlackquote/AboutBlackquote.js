import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './AboutBlackquote.module.scss';

function AboutBlackquote() {
    const style1 = {
        lineHeight: '1.5'
    }
    return (
        <Container className={`text-center ${Styles.MainSec}`} >
            <Row>
                <Col md={3}>
                    
                </Col>
                <Col md={6}>
                    <div>
                        <h5 style={style1}>“Suspendisse neque erat, imperdiet ac non, sollicitudin accumsan lacus. Vestibulum ac ex rutrum, pellentesque purus et, lacinia mi. Nullam maximus lectus libero.”</h5>
                        <p className='text-black-50'>
                            JOHN SMITH – CEO
                        </p>
                    </div>
                </Col>
                <Col md={3}>

                </Col>
            </Row>
        </Container>
    )
}

export default AboutBlackquote