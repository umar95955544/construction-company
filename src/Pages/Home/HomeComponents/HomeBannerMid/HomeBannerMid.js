import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import BgImg from '../../../../Assets/Images/BannerProject.svg'
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import HomeBannerComp from '../../../../Components/Reuseable/HomeBannerComp/HomeBannerComp'
import Styles from './HomeBannerMid.module.scss'

function HomeBannerMid() {
    const homeBannerData = [{
        image: YellowLine,
        heading: 'We’ve Been Building For Over 20 years',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem.',
        color: '#fff'
    }];
    const style = {
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
      const btnData = [{
            padding: '0.5rem 2.0rem',
            backgroundColor: '#FFB400',
            text: 'ABOUT US',
            border: '6px solid #FFB400',
            color: '#fff',
            onclick: '/about'
      }];
  return (
    <Container fluid style={style}>
        <Row>
                        <Col className={Styles.colPadding}>
            {homeBannerData.map((home, index) => (
                <div key={index}>
                    <HomeBannerComp
                        heading={home.heading}
                        image={home.image}
                        paragraph={home.paragraph}
                        color={home.color}
                        btnData={btnData}
                    />
                </div>
            ))}
            </Col>
        </Row>
    </Container>
  )
}

export default HomeBannerMid