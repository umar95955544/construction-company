import React,{useContext} from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import Button from '../Button/Button';
import { DarkModeContext } from '../../../Assets/Context/DarkModeContext';
import Styles from './AccordionSection.module.scss'

function AccordionSection({ color, backgroundColor, paddingTop, heading, image, paragraph, buttonData, accordionData, ContactForm }) {
    const {darkMode} = useContext(DarkModeContext);
    const textStyle = {
        color: color,
        fontWeight: 'bold'
    };
    const textStyle1 = {
        color: color,
        paddingTop: paddingTop
    };
    const colStyle = {
        backgroundColor: backgroundColor,
        padding: '4rem 3rem'
    };
    const style = {
        backgroundColor: '#F7F7F7',
    };
    const style1 = {
        padding: '4rem 3rem',
    }
    const style2={
        paddingTop: paddingTop
    }
    return (
        
        <Container fluid style={style} className={`py-5 ${darkMode ? 'Content-dark2' : 'Content-light2'}`}>
            <Container>
                <Row>
                    <Col lg={4} style={colStyle} className={`text-lg-start text-center ${darkMode ? 'Content-dark2' : 'Content-light2'}`}>
                        <h2 style={textStyle}>{heading}</h2>
                        <div style={style2}>
                            <img src={image} alt='' />
                        </div>
                        <p style={textStyle1}>{paragraph}</p>
                        {buttonData.slice().map((btn, index) => (
                            <div key={index} style={style2}>
                                <Button
                                    padding={btn.padding}
                                    backgroundColor={btn.backgroundColor}
                                    text={btn.text}
                                    border={btn.border}
                                    color={btn.color}
                                />
                            </div>
                        ))}
                        <div>
                           {/* here I want to use the ContactForm Component*/}
                           {ContactForm}
                        </div>
                    </Col>
                    <Col lg={8} style={style1}>
                        <Accordion defaultActiveKey="0" variant="none" className={Styles.customAccordion}>
                            {accordionData.map((data, index) => (
                                <Accordion.Item key={index} eventKey={index.toString()}>
                                    <Accordion.Header>{data.heading}</Accordion.Header>
                                    <Accordion.Body>{data.paragraph}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default AccordionSection