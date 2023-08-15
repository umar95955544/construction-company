import React,{useContext} from 'react'
import AccordionSection from '../../../../Components/Reuseable/AccordionSection/AccordionSection';
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext';

function ServiceAccordion() {
    const {darkMode} = useContext(DarkModeContext);
    const accordionSecData = [{
        backgroundColor: '#F7F7F7',
        heading: 'F.A.Q.',
        image: YellowLine,
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.',
        paddingTop: '10px'    
      }];
      const accordionData = [{
        heading: 'Donec rutrum congue leo eget malesuada?',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.',
      },
    {
        heading: 'Vivamus suscipit tortor eget felis porttitor volutpat?',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.',
       
    },
    {
        heading: 'Curabitur non nulla sit amet nisl tempus?',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.',
       
    },
    {
        heading: 'Pellentesque in ipsum id orci porta dapibus?',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.',
       
    },
    {
        heading: 'Curabitur non nulla sit amet nisl?',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.',
       
    }];
const buttonData = [{
            padding:'0.5rem 2.0rem',
            backgroundColor:'#F7F7F7',
            text:'ASK A QUESTION',
            color:'#FFB400',
            border:'4px solid #FFB400',
}];
  return (
    <div className={darkMode ?  `Content-dark`:`Content-light`}>
    {accordionSecData.map((accord, index) => (
      <div key={index}>
          <AccordionSection
              backgroundColor={accord.backgroundColor}
              color={accord.color}
              heading={accord.heading}
              image={accord.image}
              paragraph={accord.paragraph}
              paddingTop={accord.paddingTop}
              buttonData={buttonData}
              accordionData={accordionData}
          />
      </div>
  ))}
  </div>
  )
}

export default ServiceAccordion