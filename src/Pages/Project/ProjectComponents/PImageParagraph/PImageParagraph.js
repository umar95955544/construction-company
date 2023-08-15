import React,{useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PImage3 from '../../../../Assets/Images/PImage3.svg'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext';

function PImageParagraph() {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ?  `Content-dark`:`Content-light`}>
        <Container className='py-5'>
            <Row className='text-md-start text-center'>
                <Col md={6}>
                    <img src={PImage3} alt='' style={{ width: '100%' }} />
                </Col>
                <Col md={6} className='d-flex flex-column justify-content-center'>
                    <p>
                        Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                        Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.
                    </p>
                    <p>
                        Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default PImageParagraph