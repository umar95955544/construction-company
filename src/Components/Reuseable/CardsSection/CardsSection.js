import React, {useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick';
import CardsData from '../../../Assets/Data/CardsData'
import { DarkModeContext } from '../../../Assets/Context/DarkModeContext';
import Styles from './CardsSection.module.scss'


function CardsSection({ heading, image }) {
    const {darkMode} = useContext(DarkModeContext);
    const style = {
        backgroundColor: '#F7F7F7',
        padding: '4rem 0rem'
    }

    // Slick slider settings
    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 1000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <Container fluid style={style} className={darkMode ? 'Content-dark2' : 'Content-light2'}>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h1>
                            {heading}
                        </h1>
                        <div className='py-2'>
                            <img src={image} alt='' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Slider {...sliderSettings}>
                            {CardsData.map((slider, index) => (
                                <div key={index} className={`col-lg-4 col-12`}>
                                    <div className={`card m-4 ${Styles.card}`}>
                                        <div className='d-flex align-items-center justify-content-center py-4'>
                                            <img src={slider.image} alt='' />
                                        </div>
                                        <div className={`card-body ${Styles.cardBody}`}>
                                            <p>{slider.paragraph}</p>
                                            <p className='fw-bold'>{slider.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default CardsSection