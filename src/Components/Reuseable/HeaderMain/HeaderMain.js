import React from 'react'
import Button from '../Button/Button'
import { Container, Row, Col } from 'react-bootstrap'
import Styles from './HeaderMain.module.scss'

function HeaderMain({
  text, paddingTop, color,color1, color2, border, padding, paddingLeft,
  borderLeft, backgroundImage, heading, paragraph, backgroundColor, backgroundColor1, bannerData2,onclick
}) {
  const style = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  const style1={
    fontWeight: 'bold',
    borderLeft: borderLeft,
    paddingLeft: paddingLeft,
    color: color,
}
const style2={
    paddingTop:paddingTop,
    color:color,
}
  return (
    <Container fluid style={{ ...style, backgroundImage: `url(${backgroundImage})` }}>
      <Row>
        <Col lg={8}>
          <div className={Styles.leftSecHead}>
            <h1 className={Styles.head} style={style1}>{heading}</h1>
            <p style={style2}>{paragraph}</p>
            <div style={{ paddingTop }}>
              <Button
                backgroundColor={backgroundColor}
                text={text}
                padding={padding}
                color={color}
                border={border}
                onclick={onclick}
              />
            </div>
          </div>
        </Col>
        <Col lg={4} style={{ backgroundColor: backgroundColor1[0].backgroundColor }} className='p-5'>
        {bannerData2.length > 0 && <h3 className='fw-bold' style={{ color: color2[0].color }}>{bannerData2[0].text}</h3>}
        {Array.isArray(bannerData2) &&
            bannerData2.slice(1).map((service, index) => ( 
              <div key={index}>
                <div className='d-flex pt-3'>
                  <div className='d-flex align-items-center'>
                  <img src={service.image}  />
                  </div>
                  <div className='ps-3'>
                    <h6 className='fw-bold' style={{ color: color1[0].color }}>{service.heading}</h6>
                    <p style={{ color: bannerData2[1].color3 }}>{service.paragraph}</p>
                  </div>
                  <div className='d-flex'>
                  <img src={service.image1}  />
                  <img src={service.image2} className='ps-3' />
                  <img src={service.image3} className='ps-3' />
                  </div>
                </div>
              </div>
            ))}
        </Col>
      </Row>
    </Container>

  )
}

export default HeaderMain