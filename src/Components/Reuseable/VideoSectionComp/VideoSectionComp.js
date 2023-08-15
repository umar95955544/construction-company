import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../Button/Button'

function VideoSectionComp({ backgroundColor, color, heading, image, paragraph,onclick, buttonData, YouTube, backgroundColor1, fontSize, number1, text2, text3, text4, text5, text6, text7 }) {
    const textStyle = {
        color: color,
    };
    const colStyle = {
        backgroundColor: backgroundColor,
        padding: '4rem 3rem'
    };

    const style1 = {
        backgroundColor: backgroundColor1,
        padding: '2rem 0rem 1rem 1rem',
        fontWeight: 'bold',
    };
    const style2 = {
        fontWeight: '700',
        fontSize: fontSize,
    }
    const style3 = {
        fontSize: '20px',
        fontWeight: '500',
    }
    const style4 = {
        height: '380px'
    }
    const button = {
        padding: '0.8rem 2.5rem',
        backgroundColor: '#fff',
        text: 'ONLINE ESTIMATE FORM',
        border: '4px solid #1F1F1F',
        onclick: '/contact'
    }

    return (
        <Container fluid className='pt-5'>
            <Row>
                <Col lg={4} style={colStyle} className='text-lg-start text-center'>
                    <h2 style={textStyle}>{heading}</h2>
                    <div className='py-3'>
                        <img src={image} alt='' />
                    </div>
                    <p style={textStyle} className='pt-4'>{paragraph}</p>
                    {text3 && text3.trim() !== '' && <li style={textStyle}>{text3}</li>}
                    {text4 && text4.trim() !== '' && <li style={textStyle}>{text4}</li>}
                    {text5 && text5.trim() !== '' && <li style={textStyle}>{text5}</li>}
                    {text6 && text6.trim() !== '' && <li style={textStyle}>{text6}</li>}
                    {text7 && text7.trim() !== '' && <li style={textStyle}>{text7}</li>}
                    {buttonData.slice().map((btn, index) => (
                        <div key={index}>
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
                </Col>
                <Col lg={8} className='gx-0'>
                    <Row className='g-0' style={style4}>
                        {YouTube}
                    </Row>
                    <Row className='g-0'>
                        <Col lg={6} style={style1} className='text-lg-start text-center'>
                            <h6 style={style2}>{text2}</h6>
                            <p style={style3}>{number1}</p>
                        </Col>
                        <Col lg={6} className='text-center d-flex align-items-center justify-content-center'>
                            <Button
                                padding={button.padding}
                                backgroundColor={button.backgroundColor}
                                text={button.text}
                                border={button.border}
                                color={button.color}
                                onclick={button.onclick}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default VideoSectionComp