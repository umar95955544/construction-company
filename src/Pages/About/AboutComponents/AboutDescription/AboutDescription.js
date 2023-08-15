import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeadingPara from '../../../../Components/Reuseable/HeadingPara/HeadingPara'
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'


function AboutDescription() {
    const details = {
        heading: 'About Divi Construction',
        image: YellowLine,
        paragraph: (<>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit.
        </>),
        paragraph1: (<>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.
        </>),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '1rem',
        flexDirection: 'column'
    }
    return (
        <Container>
            <Row className='p-4'>
                <Col>
                    <HeadingPara
                        heading={details.heading}
                        image={details.image}
                        paragraph={details.paragraph}
                        paragraph1={details.paragraph1}
                        display={details.display}
                        alignItems={details.alignItems}
                        justifyContent={details.justifyContent}
                        paddingTop={details.paddingTop}
                        flexDirection={details.flexDirection}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutDescription