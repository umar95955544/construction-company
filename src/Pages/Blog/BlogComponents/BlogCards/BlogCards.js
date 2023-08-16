import React,{useContext} from 'react'
import { Container, Row } from 'react-bootstrap'
import ThreeCardsComp from '../../../../Components/Reuseable/ThreeCardsComp/ThreeCardsComp'
import CardImg1 from '../../../../Assets/Images/BlogCardImg1.svg'
import CardImg2 from '../../../../Assets/Images/BlogCardImg2.svg'
import CardImg3 from '../../../../Assets/Images/BlogCardImg3.svg'
import CardImg4 from '../../../../Assets/Images/BlogCardImg4.svg'
import CardImg5 from '../../../../Assets/Images/BlogCardImg5.svg'
import CardImg6 from '../../../../Assets/Images/BlogCardImg6.svg'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext'

function BlogCards() {
  const { darkMode } = useContext(DarkModeContext);
  const cardsbtnFooter = [{
    border: 'none',
    backgroundColor: '#fff',
  }];
  const cardsData = [
    {
      image: CardImg1,
      title: 'Nunc Volutpat Venenatis',
      text: 'Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi.',
      text2: 'May 9, 2014 | Category',
      height: '250px',
      backgroundColor: '#fff'
    },
    {
      image: CardImg2,
      title: 'Vestibulum Nisl Felis',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. ',
      text2: 'May 9, 2014 | Category',
      height: '250px',
      backgroundColor: '#fff'
    },
    {
      image: CardImg3,
      title: 'Proin Eu Augue Efficitur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. ',
      text2: 'May 9, 2014 | Category',
      height: '250px',
      backgroundColor: '#fff'
    },

    {
      image: CardImg4,
      title: 'Nunc Volutpat Venenatis',
      text: 'Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue vitae, porttitor luctus urna. Morbi scelerisque semper congue.',
      text2: 'May 9, 2014 | Category',
      height: '250px',
      backgroundColor: '#fff'
    }, {
      image: CardImg5,
      title: 'Donec Sit Amet Nibh',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.',
      text2: 'May 9, 2014 | Category',
      height: '250px',
      backgroundColor: '#fff'
    }, {
      image: CardImg6,
      title: 'Maecenas Fringilla Augue',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet.Donec quis felis imperdiet, vestibulum est ut, pulvinar dolor.',
      text2: 'May 9, 2014 | Category',
      height: '250px',
      backgroundColor: '#fff'
    },
  ];
  const style1 = {
    backgroundColor: '#F7F7F7',
  }
  return (
    <Container fluid style={style1} className={darkMode ? `Content-dark2` : `Content-light2`}>
      <Container className='py-5'>
        <Row>
          {cardsData.map((cards, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12" >
              <ThreeCardsComp
                image={cards.image}
                title={cards.title}
                text={cards.text}
                text2={cards.text2}
                height={cards.height}
                marginTop={cards.marginTop}
                cards={cards.backgroundColor}
                cardsbtnFooter={cardsbtnFooter}
              />
            </div>
          ))}

        </Row>
      </Container>
    </Container>
  )
}

export default BlogCards