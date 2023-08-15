import React,{useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BannerProject from '../../../../Assets/Images/BlogBannerImg.svg'
import BannerLeft from '../../../../Components/Reuseable/BannerLeft/BannerLeft'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext'
import Styles from './BlogBanner.module.scss'

function BlogBanner() {
    const {darkMode} = useContext(DarkModeContext);
    const style = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const pBlogData = [
        {
            heading: 'News',
            paddingTop: '2rem',
            borderLeft: '10px solid #FFB400',
            color: '#ffffff',
            paddingLeft: '1rem',
            marginLeft: '2rem'
        }
    ];
  return (
    <div className={darkMode ?  `Content-dark`:`Content-light`}>
        <Container fluid style={{ ...style, backgroundImage: `url(${BannerProject})` }}>
            <Container>
            <Row>
                <Col className={Styles.leftSecHead}>
                {pBlogData.map((pblog, index) => (
                <div key={index}>
                    <BannerLeft
                        heading={pblog.heading}
                        paddingTop={pblog.paddingTop}
                        borderLeft={pblog.borderLeft}
                        color={pblog.color}
                        paddingLeft={pblog.paddingLeft}
                        marginLeft={pblog.marginLeft}
                    />
                </div>
            ))}
                </Col>
            </Row>
        </Container>
        </Container>
        </div>
  )
}

export default BlogBanner