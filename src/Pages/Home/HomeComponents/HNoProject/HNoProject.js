import React,{useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RightIconYellowImg from '../../../../Assets/Images/RightIconWhite.svg'
import BannerRight from '../../../../Components/Reuseable/BannerRight/BannerRight'
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import Button from '../../../../Components/Reuseable/Button/Button'
import HeadingPara from '../../../../Components/Reuseable/HeadingPara/HeadingPara'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext'
import Styles from './HNoProject.module.scss'

function HNoProject() {
    const { darkMode } = useContext(DarkModeContext);
    const aboutLeftData = [
        {
            text: '',
        },
        {
            image: RightIconYellowImg,
            heading: 'Eco Friendly Construction',
            paragraph: 'Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        }, {
            image: RightIconYellowImg,
            heading: 'The Newest Technology Repairs',
            paragraph: 'Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        },
        {
            image: RightIconYellowImg,
            heading: 'High Quality Construction Management',
            paragraph: 'Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        },

    ];
    const style = {
        backgroundColor: '#FFB400'
    }
    const contactButton =
    {
        padding: '0.5rem 2.0rem',
        backgroundColor: 'transparent',
        text: 'ONLINE ESTIMATE FORM',
        color: '#FFB400',
        border: '5px solid #FFB400',
        onclick: '/contact'
    };
    const details = {
        heading: 'No Project Too Big Or Too Small',
        image: YellowLine,
        paragraph: (<>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis
        </>),
        paragraph1: (<>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
        </>),
        display: 'flex',
        paddingTop: '1rem',
        flexDirection: 'column'
    }

    return (
        <Container fluid style={style} className="gx-0">
            <Row className='gx-0'>
                <Col lg={4} className={Styles.ColOne}>

                    <BannerRight
                        bannerRightData={aboutLeftData}
                    />

                </Col>
                <Col lg={8} >
                    <Row className={`gx-0 ${Styles.NoProjectCol} ${darkMode ? 'Content-dark2' : 'Content-light2'}`} style={{backgroundColor: '#F7F7F7'}} >
                    <HeadingPara
                        heading={details.heading}
                        image={details.image}
                        paragraph={details.paragraph}
                        paragraph1={details.paragraph1}
                        display={details.display}
                        alignItems={details.alignItems}
                        paddingTop={details.paddingTop}
                        flexDirection={details.flexDirection}
                    />
                    </Row>
                    <Row className='gx-0' style={{ backgroundColor: '#2A2A2A', }}>
                        <Col md={6} className="text-center p-4">
                            <h2 className='fw-bold text-white'>Get Free Consultation</h2>
                        </Col>
                        <Col md={6} className="d-flex p-2 align-items-center justify-content-center" >
                            <Button
                                heading={contactButton.heading}
                                padding={contactButton.padding}
                                backgroundColor={contactButton.backgroundColor}
                                text={contactButton.text}
                                color={contactButton.color}
                                border={contactButton.border}
                                onclick={contactButton.onclick}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default HNoProject