import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from '../Button/Button'

function ServicesDetailsComp({heading, image, paragraph, padding, buttonData1, buttonData2,servicesListItems}) {
    return (
        <>
            <Row style={{padding}} className='text-md-start text-center'> 
                <h1>{heading}</h1>
                <div className='py-2'>
                    <img src={image} alt='' />
                </div>
                <p>{paragraph}</p>
                {Array.isArray(servicesListItems) &&
                    servicesListItems.map((item, index) => (
                        <div key={index} className='col-md-4 col-12 text-md-start text-center'>
                            <li>{item.text1}</li>
                            <li>{item.text2}</li>
                            <li>{item.text3}</li>
                            <li>{item.text4}</li>
                            <li>{item.text5}</li>
                        </div>
                    ))}
            </Row>
            <Row>
            <Col md={6} className='text-center p-4' style={{backgroundColor: buttonData1[0].backgroundColor}}>
            {Array.isArray(buttonData1) &&
                    buttonData1.map((btn, index) => (
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
               <Col md={6} className='text-center p-4'  style={{backgroundColor: buttonData2[0].backgroundColor}}>
                {Array.isArray(buttonData2) &&
                    buttonData2.map((btn, index) => (
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
            </Row>
        </>
    )
}

export default ServicesDetailsComp