import React from 'react'
import {Card} from 'react-bootstrap';
import Button from '../Button/Button';
import Styles from './ThreeCardsComp.module.scss';

function ThreeCardsComp({image,title,text,text2,marginTop,border,height,backgroundColor,cardsbtnFooter}) {
    
    const style = {
      marginTop: marginTop,
      border: border,
    }
    const style1={
      height: height,
    }
    const style2={
      backgroundColor: backgroundColor,
    }
    
  return (

    <Card className={Styles.CardStyle} style={style2}>
      <Card.Img variant="top" src={image} className={Styles.CardImgTop}/>
      <Card.Body style={style} >
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
                                />
                            </div>
                        ))}
      </Card.Body>
      </Card>
  )
}

export default ThreeCardsComp