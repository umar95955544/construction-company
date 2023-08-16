import React,{useContext} from 'react'
import {Card} from 'react-bootstrap';
import Button from '../Button/Button';
import { DarkModeContext } from '../../../Assets/Context/DarkModeContext';
import Styles from './ThreeCardsComp.module.scss';

function ThreeCardsComp({image,title,text,text2,marginTop,border,height,backgroundColor,cardsbtnFooter}) {
  const { darkMode } = useContext(DarkModeContext);
    const style = {
      marginTop: marginTop,
      border: border,
    }
    const style1={
      height: height,
    }
    const style3={
      backgroundColor: backgroundColor,
    }
    
  return (

    <Card style={style3} className={`${Styles.CardStyle} ${darkMode ? `Content-dark` : `Content-light`}`}>
      <Card.Img variant="top" src={image} className={Styles.CardImgTop}/>
      <Card.Body style={style}>
        <Card.Title className='py-2'>{title}</Card.Title>
        <Card.Text className="text-black-50">
          {text2}
        </Card.Text>
        <Card.Text style={style1}>
          {text}
        </Card.Text>
        {cardsbtnFooter.slice().map((btn, index) => ( 
                            <div key={index}>
                                <Button
                                    padding={btn.padding}
                                    text={btn.text1}
                                    border={btn.border}
                                    color={btn.color}
                                    width={btn.width}
                                    backgroundColor={btn.backgroundColor}
                                    onclick={btn.onclick}
                                />
                            </div>
                        ))}
      </Card.Body>
      </Card>
  )
}

export default ThreeCardsComp