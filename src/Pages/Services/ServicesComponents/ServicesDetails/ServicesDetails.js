import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import ServicesDetailsComp from '../../../../Components/Reuseable/ServicesDetailsComp/ServicesDetailsComp';
import servicesListItems from '../../../../Assets/Data/ServicesListItems'
import servicesListItems1 from '../../../../Assets/Data/ServicesListItems1'
import servicesListItems2 from '../../../../Assets/Data/ServicesListItems2'


function ServicesDetails() {
    const servicesData= {
        heading: 'Building Construction',
        image: YellowLine,
        paragraph: 'Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum.',
        padding: '5rem 2rem 2rem 5rem',
    };
    const servicesData1= {
        heading: 'Repairs & Installations',
        image: YellowLine,
        paragraph: 'Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum.',
        padding: '5rem 4rem 2rem 2rem',
    };
    const servicesData2= {
        heading: 'Custom Design Projects',
        image: YellowLine,
        paragraph: 'Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum.',
        padding: '5rem 2rem 2rem 5rem',
    };
    const buttonData1=[{
            padding: '0.5rem 2.5rem',
            backgroundColor: '#2A2A2A',
            text: 'GET A QUOTE',
            border: '5px solid #FFFFFF',
            color: 'white',
            onclick: '/contact'
    }];
    const buttonData2=[{
        padding: '0.5rem 2.5rem',
        backgroundColor: '#FFB400',
        text: 'GET A QUOTE',
        border: '5px solid #FFFFFF',
        color: 'white',
        onclick: '/contact'
}];
const style={
    backgroundColor: '#F7F7F7',
}

  return (
    <Container fluid >
        <Row>
            <Col md={3}>

            </Col>
            <Col md={9} style={style}>
            
                    <ServicesDetailsComp
                        heading={servicesData.heading}
                        paragraph={servicesData.paragraph}
                        padding={servicesData.padding}
                        image={servicesData.image}
                        buttonData1={buttonData1}
                        buttonData2={buttonData2}
                        servicesListItems={servicesListItems}
                    />
           
           
            </Col>
        </Row>
        <Row>
            <Col md={9} >
            <ServicesDetailsComp
                        heading={servicesData1.heading}
                        paragraph={servicesData1.paragraph}
                        padding={servicesData1.padding}
                        image={servicesData1.image}
                        buttonData1={buttonData1}
                        buttonData2={buttonData2}
                        servicesListItems={servicesListItems1}
                    />
            </Col>
            <Col md={3}>
                
            </Col>
        </Row>
        <Row>
            <Col md={3}>
            
            </Col>
            <Col md={9} style={style}>
            <ServicesDetailsComp
                        heading={servicesData2.heading}
                        paragraph={servicesData2.paragraph}
                        padding={servicesData2.padding}
                        image={servicesData2.image}
                        buttonData1={buttonData1}
                        buttonData2={buttonData2}
                        servicesListItems={servicesListItems2}
                    />
            </Col>
        </Row>
    </Container>
  )
}

export default ServicesDetails