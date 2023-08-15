import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'


function TwoParagraphs() {
  return (
    <Container className='py-5'>
        <Row className='text-md-start text-center'>
            <Col md={6}>
                <p>Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. </p>
            </Col>
            <Col md={6}>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.

Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. </p>
            </Col>
        </Row>
    </Container>
  )
}

export default TwoParagraphs