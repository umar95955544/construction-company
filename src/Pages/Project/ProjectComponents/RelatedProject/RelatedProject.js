import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import CardsButton from '../../../../Components/Reuseable/Button/Button'
import CardImg1 from '../../../../Assets/Images/CardImg1.svg'
import CardImg2 from '../../../../Assets/Images/CardImg2.svg'
import CardImg3 from '../../../../Assets/Images/CardImg3.svg'
import ThreeCardsComp from '../../../../Components/Reuseable/ThreeCardsComp/ThreeCardsComp'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext'

function RelatedProject() {
    const { darkMode } = useContext(DarkModeContext);
    const cardsData = [
        {
            image: CardImg1,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.',
            text1: 'LEARN MORE',
            border: '1px solid #666666',
            marginTop: '2rem',
            height: '250px',
            backgroundColor:'#F7F7F7'
        },
        {
            image: CardImg2,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.',
            text1: 'LEARN MORE',
            border: '1px solid #666666',
            marginTop: '2rem',
            height: '250px',
            backgroundColor:'#F7F7F7'
        },
        {
            image: CardImg3,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.',
            text1: 'LEARN MORE',
            border: '1px solid #666666',
            marginTop: '2rem',
            height: '250px',
            backgroundColor:'#F7F7F7'
        }
    ];
    const cardsbtnFooter=[{
        padding: '0.2rem 1rem',
        text1: 'VIEW PROJECT',
        backgroundColor: '#F7F7F7',
        color: '#666666',
        border: '1px solid #666666',
        width: '100%'
    }];
    const cardsbtnData = [{
        padding: '0.5rem 2.5rem',
        backgroundColor: '#fff',
        text: 'VIEW ALL',
        border: '4px solid #000000',
    }];
    const style = {
        backgroundColor: '#F7F7F7',
    }
    return (
        <div className={darkMode ? `Content-dark` : `Content-light`}>
            <Container fluid style={style}>
                <Container>
                    <Row className='py-5'>
                        <Col>
                            <Row className='text-center'>
                                <h2 className='fw-bold'>Related Projects</h2>
                                <div>
                                    <img src={YellowLine} alt='' />
                                </div>
                            </Row>
                            <Row className='py-5 px-5'>
                                {cardsData.map((cards, index) => (
                                    <div key={index} className="col-lg-4 col-12" >
                                        <ThreeCardsComp
                                            image={cards.image}
                                            title={cards.title}
                                            text={cards.text}
                                            marginTop={cards.marginTop}
                                            border={cards.border}
                                            height={cards.height}
                                            backgroundColor={cards.backgroundColor}
                                            cardsbtnFooter={cardsbtnFooter}
                                        />
                                    </div>
                                ))}
                            </Row>
                            <Row className='text-center'>
                                {cardsbtnData.map((cards, index) => (
                                    <div key={index}>
                                        <CardsButton
                                            padding={cards.padding}
                                            backgroundColor={cards.backgroundColor}
                                            text={cards.text}
                                            border={cards.border}
                                        />
                                    </div>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default RelatedProject