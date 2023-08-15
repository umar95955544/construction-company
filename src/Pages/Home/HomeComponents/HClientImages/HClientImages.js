import React from 'react'
import ClientImage from '../../../../Assets/Images/clientImage.png';
import { Container, Row, Col } from 'react-bootstrap';

function HClientImages() {
    const style={
        backgroundColor: '#F7F7F7',
    }
    return (
        <Container fluid style={style}>
        <Container className='text-center' >
            <Row>
                <Col>
                    <div>
                        <img src={ClientImage} alt='' className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
        </Container>

    )
}

export default HClientImages