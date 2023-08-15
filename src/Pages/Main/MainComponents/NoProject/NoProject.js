import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import NoProjectLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import NoProjectComp from '../../../../Components/Reuseable/NoProjectComp/NoProjectComp'
import Styles from './NoProject.module.scss'


function NoProject() {
    const noProjectData = [
        {
            heading: 'No Project Too Big Or Too Small',
            image: NoProjectLine,
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.  ',
            text4: 'YEARS ESTABLISHED',
            text5:'COMPLETED PROJECTS',
            number1:'12',
            number2:'250',
            color:'#fff',
            backgroundColor:'#F7F7F7'
        }
    ];
    const buttonData = [
        {
            padding: '0.8rem 2.5rem',
            backgroundColor: 'transparent',
            text: 'LEARN MORE',
            border: '4px solid #1F1F1F',
            onclick: '/project'
        }
    ];
  return (
    
    <Container fluid >
        <Row>
            <Col md={4} className={Styles.bgImageColOne}>
                
            </Col>
            <Col md={8} className='gx-0 text-md-start text-center'>
                
            {noProjectData.map((noProject, index) => (
                <div key={index}>
                    <NoProjectComp
                        heading={noProject.heading}
                        image={noProject.image}
                        text1={noProject.text1}
                        text2={noProject.text2}
                        text3={noProject.text3}
                        text4={noProject.text4}
                        text5={noProject.text5}
                        number1={noProject.number1}
                        number2={noProject.number2}
                        color={noProject.color}
                        backgroundColor={noProject.backgroundColor}
                        backgroundColor1="#FFB400"
                        backgroundColor2="#2A2A2A"
                        fontSize={30}
                        buttonData={buttonData}
                    />
                </div>
            ))}
            </Col>
        </Row>
    </Container>
    
  )
}

export default NoProject