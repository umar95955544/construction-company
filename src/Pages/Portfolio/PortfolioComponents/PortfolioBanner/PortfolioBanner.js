import React,{useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BannerPortfolio from '../../../../Assets/Images/PortfolioBannerImg.svg'
import BannerLeft from '../../../../Components/Reuseable/BannerLeft/BannerLeft'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext'
import Styles from './PortfolioBanner.module.scss'



function PortfolioBanner() {
    const {darkMode} = useContext(DarkModeContext);
    const style = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const portfolioData = [
        {
            heading: 'Our Construction Projects',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. ',
            paddingTop: '2rem',
            borderLeft: '10px solid #FFB400',
            color: '#ffffff',
            paddingLeft: '1rem',
            marginLeft: '2rem'
        }
    ];
  return (
    <div className={darkMode ?  `Content-dark`:`Content-light`}>
        <Container fluid style={{ ...style, backgroundImage: `url(${BannerPortfolio})` }}>
            <Container>
            <Row>
                <Col className={Styles.leftSecHead} md={8}>
                {portfolioData.map((pblog, index) => (
                <div key={index}>
                    <BannerLeft
                        heading={pblog.heading}
                        paragraph={pblog.paragraph}
                        paddingTop={pblog.paddingTop}
                        borderLeft={pblog.borderLeft}
                        color={pblog.color}
                        paddingLeft={pblog.paddingLeft}
                        marginLeft={pblog.marginLeft}
                    />
                </div>
            ))}
                </Col>
                <Col md={4}>

                </Col>
            </Row>
        </Container>
        </Container>
        </div>
  )
}

export default PortfolioBanner