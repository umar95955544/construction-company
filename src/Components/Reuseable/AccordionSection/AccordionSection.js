import React, { useState, useContext } from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import Button from '../Button/Button';
import { DarkModeContext } from '../../../Assets/Context/DarkModeContext';
import AccordionItem from '../AccordionItem/AccordionItem'
import Styles from './AccordionSection.module.scss'

function AccordionSection({ color, backgroundColor, paddingTop, heading, image, paragraph, buttonData, accordionData, ContactForm }) {
    const { darkMode } = useContext(DarkModeContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleToggle = (index) => {
        if (index === activeIndex) {
          setActiveIndex(null); // Clicking on the same item hides its content
        } else {
          setActiveIndex(index);
        }
    };
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
    const style2 = {
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
                                    onclick={btn.onclick}
                                />
                            </div>
                        ))}
                        <div>
                            {/* here I want to use the ContactForm Component*/}
                            {ContactForm}
                        </div>
                    </Col>
                    <Col lg={8} style={style1}>
                        <ul className={`gx-0 ${Styles.accordion}`}>
                            {accordionData.map((faq, index) => (
                                <AccordionItem key={index} faq={faq} isActive={index === activeIndex}
                                handleToggle={() => handleToggle(index)}/>
                            ))}
                        </ul>
                        {/* <Accordion defaultActiveKey="0" variant="none" className={Styles.customAccordion}>
                            {accordionData.map((data, index) => (
                                <Accordion.Item key={index} eventKey={index.toString()}>
                                    <Accordion.Header>{data.heading}</Accordion.Header>
                                    <Accordion.Body>{data.paragraph}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion> */}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default AccordionSection