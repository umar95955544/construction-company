import React,{useContext} from 'react'
import { Container, Row } from 'react-bootstrap';
import ThreeCardsComp from '../../../../Components/Reuseable/ThreeCardsComp/ThreeCardsComp'
import CardImg1 from '../../../../Assets/Images/PortfolioCardImg1.svg'
import CardImg2 from '../../../../Assets/Images/PortfolioCardImg2.svg'
import CardImg3 from '../../../../Assets/Images/PortfolioCardImg3.svg'
import CardImg4 from '../../../../Assets/Images/PortfolioCardImg4.svg'
import CardImg5 from '../../../../Assets/Images/PortfolioCardImg5.svg'
import CardImg6 from '../../../../Assets/Images/PortfolioCardImg6.svg'
import CardImg7 from '../../../../Assets/Images/PortfolioCardImg7.svg'
import CardImg8 from '../../../../Assets/Images/PortfolioCardImg8.svg'
import CardImg9 from '../../../../Assets/Images/PortfolioCardImg9.svg'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext';

function PortfolioCards() {
    const {darkMode} = useContext(DarkModeContext);
    const cardsData = [
        {
            image: CardImg1,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.',
            border: '1px solid #666666',
            marginTop: '2rem',
            height: '250px',
            backgroundColor: '#F7F7F7',
        },
        {
            image: CardImg2,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.',
            border: '1px solid #666666',
            marginTop: '2rem',
            height: '250px',
            backgroundColor: '#F7F7F7',
        },
        {
            image: CardImg3,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.',
            border: '1px solid #666666',
            marginTop: '2rem',
            backgroundColor: '#F7F7F7',
            height: '250px'
        }
        ,
        {
            image: CardImg4,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.',
            border: '1px solid #666666',
            marginTop: '2rem',
            backgroundColor: '#F7F7F7',
            height: '250px'
        }
        ,
        {
            image: CardImg5,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.',
            border: '1px solid #666666',
            marginTop: '2rem',
            backgroundColor: '#F7F7F7',
            height: '250px'
        }
        ,
        {
            image: CardImg6,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.',
            border: '1px solid #666666',
            marginTop: '2rem',
            backgroundColor: '#F7F7F7',
            height: '250px'
        }
        ,
        {
            image: CardImg7,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.',
            border: '1px solid #666666',
            marginTop: '2rem',
            backgroundColor: '#F7F7F7',
            height: '250px'
        }
        ,
        {
            image: CardImg8,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.',
            border: '1px solid #666666',
            marginTop: '2rem',
            backgroundColor: '#F7F7F7',
            height: '250px'
        }
        ,
        {
            image: CardImg9,
            title: 'Service Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.',
            border: '1px solid #666666',
            marginTop: '2rem',
            backgroundColor: '#F7F7F7',
            height: '250px'
        }
    ];
    const cardsbtnFooter = [{
        padding: '0.2rem 1rem',
        text1: 'LEARN MORE',
        backgroundColor: '#F7F7F7',
        color: '#666666',
        border: '1px solid #666666',
        width: '100%'
    }];
    const style = {
        backgroundColor: '#F7F7F7',
    }
    return (
        <div className={darkMode ?  `Content-dark`:`Content-light`}>
        <Container fluid style={style} >
            <Container className='py-5'>
                <Row >
                    {cardsData.map((cards, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-12 py-4" >
                            <ThreeCardsComp
                                image={cards.image}
                                title={cards.title}
                                text={cards.text}
                                marginTop={cards.marginTop}
                                border={cards.border}
                                backgroundColor={cards.backgroundColor}
                                height={cards.height}
                                cardsbtnFooter={cardsbtnFooter}
                            />
                        </div>
                    ))}
                </Row>
            </Container>
        </Container>
        </div>
    )
}

export default PortfolioCards