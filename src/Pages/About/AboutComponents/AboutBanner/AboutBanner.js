import React from 'react'
import MainBannerImg from '../../../../Assets/Images/ServiceBannerImg.svg'
import MainBannerImg2 from '../../../../Assets/Images/ServiceBannerImg1.svg'
import MainBannerImg3 from '../../../../Assets/Images/ServiceBannerImg2.svg'
import MainBannerImg4 from '../../../../Assets/Images/ServiceBannerImg3.svg'
import HeaderMain from '../../../../Components/Reuseable/HeaderMain/HeaderMain'

function AboutBanner() {
    const bannerData = [
        {
            heading: 'About Our Construction Company',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut.',
            padding: '0.8rem 2.0rem',
            paddingTop: '1rem',
            borderLeft: '10px solid #FFB400',
            backgroundColor: '#FFB400',
            text: 'GET A FREE QUOTE',
            backgroundImage: MainBannerImg,
            color: '#ffffff',
            paddingLeft: '1rem',
            border: '1px solid #FFB400',
            onclick: '/contact'
        }
    ];
    const bannerData2 = [
        {
        text: 'What We Do',
    },
    {
        image: [MainBannerImg2],
        heading: 'Building Construction',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat',
        color: '#fff',
        color3: '#fff'
    },{
        image: [MainBannerImg3],
        heading: 'Building Repairs',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat',
        color: '#fff',
        color3: '#fff'
    },
    {
        image: [MainBannerImg4],
        heading: 'Custom Design',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat',
        color: '#fff',
        color3: '#fff'
    },

];
const backgroundColor1 =[{
  backgroundColor: 'transparent'
}];
const color1 =[{
  color: '#fff'
}];
const color2=[{
    color: '#FFB400'
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
                        onclick={banner.onclick}
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

export default AboutBanner