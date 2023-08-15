import React, {useContext} from 'react'
import ClientImage from '../../../../Assets/Images/clientImage.png';
import { Container, Row, Col } from 'react-bootstrap';
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext';

function ClientImages() {
    const {darkMode} = useContext(DarkModeContext);
    const style={
        backgroundColor: '#F7F7F7',
    }
    return (
        <Container fluid style={style} className={darkMode ? 'Content-dark2' : 'Content-light2'}>
        <Container className='text-center'>
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

export default ClientImages