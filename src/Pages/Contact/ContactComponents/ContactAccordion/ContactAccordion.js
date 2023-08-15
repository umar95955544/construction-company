import React,{useContext} from 'react'
import AccordionSection from '../../../../Components/Reuseable/AccordionSection/AccordionSection';
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext';
import ContactForm from '../../../../Components/Reuseable/ContactForm/ContactForm';

function ContactAccordion() {
    const {darkMode} = useContext(DarkModeContext);
    const accordionSecData = [{
        backgroundColor: '#F7F7F7',
        heading: 'Get In Touch',
        image: YellowLine,
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
            backgroundColor:'#F7F7F7',
            border:'none',
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
              buttonData={buttonData}
              accordionData={accordionData}
              ContactForm={<ContactForm />}
          />
      </div>
  ))}
  </div>
  )
}

export default ContactAccordion