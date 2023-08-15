import React from 'react'
import MainBannerImg from '../../../../Assets/Images/MainBannerImg.svg'
import FacebookIcon from '../../../../Assets/Images/facebook 2.svg'
import LinkdinIcon from '../../../../Assets/Images/linkedin 2.svg'
import TwitterIcon from '../../../../Assets/Images/twitter 2.svg'
import HeaderMain from '../../../../Components/Reuseable/HeaderMain/HeaderMain'

function ContactBanner() {
    const bannerData = [
        {
            heading: 'Contact Us',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.',
            padding: '0.8rem 2.5rem',
            paddingTop: '2rem',
            borderLeft: '10px solid #FFB400',
            backgroundColor: '#FFB400',
            backgroundColor1: '#FFB400',
            text: 'SEND A MESSAGE',
            backgroundImage: MainBannerImg,
            color: '#ffffff',
            paddingLeft: '1rem',
            border: '1px solid #FFB400',
        }
    ];
    const bannerData2 = [
        {
            text: '',
        },
    {
        heading: 'Contact Info',
        paragraph: '1234 Divi St. #1000, San Francisc, CA 93251',
        color: '#000'
    },{
        heading: 'Open Office Hours',
        paragraph: (
            <>
                M-F: 9am – 6pm <br />
                S-S: 10am – 4pm
            </>
        ),
        color: '#000'
    },
    {
        heading: 'Get in Touch',
        paragraph: (
            <>
                constructioninc.com <br />
                (346) 426-2351
            </>
        ),
        color:'#000'

    },
    {
        image1: FacebookIcon,
        image2: LinkdinIcon,
        image3: TwitterIcon, 
    }

];
const backgroundColor1 =[{
    backgroundColor: '#FFB400'
}];
const color1 =[{
    color: '#000'
}];
const color2 =[{
    color: '#000'
}];
    return (
        <>
            {bannerData.map((banner, index) => (
                <div key={index}>
                    <HeaderMain
                        heading={banner.heading}
                        paragraph={banner.paragraph}
                        padding={banner.padding}
                        paddingTop={banner.paddingTop}
                        borderLeft={banner.borderLeft}
                        backgroundColor={banner.backgroundColor}
                        backgroundColor1={backgroundColor1}
                        color1={color1}
                        color2={color2}
                        text={banner.text}
                        backgroundImage={banner.backgroundImage}
                        color={banner.color}
                        paddingLeft={banner.paddingLeft}
                        border={banner.border}
                        bannerData2={bannerData2}
                    />
                </div>
            ))}
        </>
    )
}

export default ContactBanner