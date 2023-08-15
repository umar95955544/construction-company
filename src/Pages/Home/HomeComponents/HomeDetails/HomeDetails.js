import React from 'react'
import { Container, Row } from 'react-bootstrap'
import HImage1 from '../../../../Assets/Images/HImage1.svg'
import HImage2 from '../../../../Assets/Images/HImage2.svg'
import HImage3 from '../../../../Assets/Images/HImage3.svg'
import HImage4 from '../../../../Assets/Images/HImage4.svg'
import HImage5 from '../../../../Assets/Images/HImage5.svg'
import HImage6 from '../../../../Assets/Images/HImage6.svg'

function HomeDetails() {
    const HDetailsData = [{
        image: HImage1,
        heading: 'Building Construction',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
    }, {
        image: HImage2,
        heading: 'Building Repairs',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
    }, {
        image: HImage3,
        heading: 'Demolition',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
    }, {
        image: HImage4,
        heading: 'Foundation',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
    }, {
        image: HImage5,
        heading: 'Painting & Exterior',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
    }, {
        image: HImage6,
        heading: 'Site Management',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat'
    },];
    return (
        <Container>
            <Row>
                {HDetailsData.map((Hdetail, index) => (
                    <div key={index} className={`col-md-6 col-lg-4 col-12 p-4`} >
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={Hdetail.image} alt=''/>
                            </div>
                            <div className='ps-2'>
                                <p className='fw-bold'>{Hdetail.heading}</p>
                                <p>{Hdetail.paragraph}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Row>
        </Container>
    )
}

export default HomeDetails