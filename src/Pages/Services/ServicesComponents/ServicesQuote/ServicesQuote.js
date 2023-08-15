import React,{useContext} from 'react'
import QuoteButton from '../../../../Components/Reuseable/QuoteButton/QuoteButton';
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext';

function ServicesQuote() {
    const {darkMode} = useContext(DarkModeContext);
    const quoteData = [
        {
            heading: 'Get a Quote For Your Project',
            padding: '0.8rem 2.5rem',
            backgroundColor: 'transparent',
            text: 'FREE QUOTE',
            color: '#FFB400',
            border: '5px solid #FFB400',
            onclick: '/contact'
        }
    ];
  return (

    <div className={darkMode ?  `Content-dark`:`Content-light`}>
    {quoteData.map((quote, index) => (
        <div key={index} style={{boxShadow: '0px 4px 20px 0px #00000040'}}>
            <QuoteButton 
                heading={quote.heading}
                padding={quote.padding}
                backgroundColor={quote.backgroundColor}
                text={quote.text}
                color={quote.color}
                border={quote.border}
                onclick={quote.onclick}
            />
        </div>
    ))}
    </div>
  )
}

export default ServicesQuote