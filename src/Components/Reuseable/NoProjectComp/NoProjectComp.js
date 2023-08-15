import React,{useContext} from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from '../Button/Button'
import { DarkModeContext } from '../../../Assets/Context/DarkModeContext'
import Styles from './NoProjectComp.module.scss'

function NoProjectComp({ heading, image, text1, text2, text3, text4, text5, number1, number2, color, backgroundColor, backgroundColor1, backgroundColor2, fontSize, buttonData }) {
    // Create styles for backgroundColor1 and backgroundColor2
    const {darkMode} = useContext(DarkModeContext);
    const style1 = {
        backgroundColor: backgroundColor1,
        padding: '1rem 0rem',
        fontWeight: 'bold'
    };

    const style2 = {
        backgroundColor: backgroundColor2,
        padding: '1rem 0rem',
        fontWeight: 'bold',
        color: color
    };
    const style3 = {
        fontSize: fontSize,
    }
    return (
        <>
        
            <div className={`${Styles.noProjectRightDiv} ${darkMode ? 'Content-dark2' : 'Content-light2'}`} style={{ backgroundColor }}>
                <Row>
                    <h1>{heading}</h1>
                    <div className='py-4'>
                        <img src={image} alt='' />
                    </div>
                </Row>
                <Row>
                    <Col lg={6}>
                        <p>{text1}</p>
                    </Col>
                    <Col lg={6}>
                        <p>{text2}</p>
                    </Col>
                </Row>
                <Row className='pt-4'>
                    <Col lg={6}>
                        <p>{text3}</p>
                    </Col>
                    <Col lg={6}>
                        {buttonData.slice().map((btn, index) => ( 
                            <div key={index}>
                                <Button 
                                    padding={btn.padding}
                                    backgroundColor={btn.backgroundColor}
                                    text={btn.text}
                                    border={btn.border}
                                    onclick={btn.onclick}
                                />
                            </div>
                        ))}
                    </Col>
                </Row>
            </div>
            <div>
                <Row className='text-center gx-0'>
                    <Col lg={6} style={style1}>
                        <p style={style3}>{number1}</p>
                        <h6>{text4}</h6>
                    </Col>
                    <Col lg={6} style={style2}>
                        <p style={style3}>{number2}</p>
                        <h6>{text5}</h6>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default NoProjectComp