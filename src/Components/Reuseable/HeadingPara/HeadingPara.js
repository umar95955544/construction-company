import React,{useContext} from 'react'
import { Row,Col } from 'react-bootstrap'
import { DarkModeContext } from '../../../Assets/Context/DarkModeContext';

function HeadingPara({heading,image, paragraph, paragraph1,display,alignItems,justifyContent,paddingTop,flexDirection}) {
    const { darkMode } = useContext(DarkModeContext);
    const style={
        display: display,      
        alignItems: alignItems,    
        justifyContent: justifyContent,
        flexDirection: flexDirection,
    }
    const style1={
        paddingTop: paddingTop
    }
  return (
    <>
    <Row className={darkMode ? 'Content-dark2' : 'Content-light2'}>
        <div style={style}>
        <h1>
            {heading}
        </h1>
        <div>
            <img src={image} alt='' />
        </div>
        </div>
    </Row>
    <Row style={style1} className={darkMode ? 'Content-dark2' : 'Content-light2'}>
        <Col md={6}>
            <p>{paragraph}</p>
        </Col>
        <Col md={6}>
            <p>{paragraph1}</p>
        </Col>
    </Row>
    </>
  )
}

export default HeadingPara