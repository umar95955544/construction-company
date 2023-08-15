import React,{useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BannerProject from '../../../../Assets/Images/BannerProject.svg'
import BannerLeft from '../../../../Components/Reuseable/BannerLeft/BannerLeft'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext'
import Styles from './PBanner.module.scss'

function PBanner() {
    const {darkMode} = useContext(DarkModeContext);
    const style = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const pBannerData = [
        {
            heading: 'Monarch HQ Project',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.',
            paddingTop: '2rem',
            borderLeft: '10px solid #FFB400',
            color: '#ffffff',
            paddingLeft: '1rem',
        }
    ];
    return (
        <div className={darkMode ?  `Content-dark`:`Content-light`}>
        <Container fluid style={{ ...style, backgroundImage: `url(${BannerProject})` }}>
            <Container>
            <Row>
                <Col lg={8} className={`text-lg-start text-center ${Styles.leftSecHead}`}>
                {pBannerData.map((pbanner, index) => (
                <div key={index}>
                    <BannerLeft
                        heading={pbanner.heading}
                        paragraph={pbanner.paragraph}
                        paddingTop={pbanner.paddingTop}
                        borderLeft={pbanner.borderLeft}
                        color={pbanner.color}
                        paddingLeft={pbanner.paddingLeft}
                    />
                </div>
            ))}
                </Col>
                <Col lg={4}>
                    <p className={`text-center text-lg-start ${Styles.textPara}`}>
                        Date: 12 April 2018<br />
                        Client: Monarch Group<br />
                        Project Type: Building Renovation
                    </p>
                </Col>
            </Row>
        </Container>
        </Container>
        </div>
    )
}

export default PBanner