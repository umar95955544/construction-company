import React from 'react'
import MainBannerImg from '../../../../Assets/Images/MainBannerImg.svg'
import MainBannerImg2 from '../../../../Assets/Images/MainBannerImg2.svg'
import MainBannerImg3 from '../../../../Assets/Images/MainBannerImg3.svg'
import MainBannerImg4 from '../../../../Assets/Images/MainBannerImg4.svg'
import HeaderMain from '../../../../Components/Reuseable/HeaderMain/HeaderMain'

function Banner() {
    const bannerData = [
        {
            heading: 'Construction',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.',
            padding: '0.8rem 2.5rem',
            paddingTop: '2rem',
            borderLeft: '10px solid #FFB400',
            backgroundColor: '#FFB400',
            backgroundColor1: '#FFB400',
            text: 'VIEW OUR WORK',
            backgroundImage: MainBannerImg,
            color: '#ffffff',
            paddingLeft: '1rem',
            border: '1px solid #FFB400',
        }
    ];
    const bannerData2 = [
        {
        text: 'Our Services',
    },
    {
        image: [MainBannerImg2],
        heading: 'Building Construction',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit.',
        color: '#ffffff',
        color3: '#fff'
    },{
        image: [MainBannerImg3],
        heading: 'Foundation Work',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit.',
        color: '#ffffff',
        color3: '#fff'
    },
    {
        image: [MainBannerImg4],
        heading: 'Site Management',
        paragraph: 'Lorem ipsum dolor sit consectetur adipiscing elit.',
        color: '#ffffff',
        color3: '#fff'
    },

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

export default Banner