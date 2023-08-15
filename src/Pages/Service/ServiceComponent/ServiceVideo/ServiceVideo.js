import React, {useContext} from 'react'
import VideoSectionComp from '../../../../Components/Reuseable/VideoSectionComp/VideoSectionComp'
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import YouTube from 'react-youtube';
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext';


function ServiceVideo() {
  const {darkMode} = useContext(DarkModeContext);
  const videoData = [{
            backgroundColor: '#2A2A2A',
            color: '#fff',
            heading: 'About Process',
            image: YellowLine,
            paragraph: 
            'Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus.',
            text3: 'Maecenas ornare nisl',
            text4: 'A tortor ultrices bibendum',
            text5: 'Nulla fermentum',
            text6: 'Metus quis',
            text7: 'Sodales tristique',
            text2: 'Call for a Quote',
            number1:'(346) 234-6973',
          }];
  const buttonData = [{
                backgroundColor:'#2A2A2A',
                border:'none',
  }];
  const videoId = 'QFaFIcGhPoM';

  const opts = {
    height: '380',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className={darkMode ?  `Content-dark`:`Content-light`}>
    {videoData.map((video, index) => (
      <div key={index}>
          <VideoSectionComp
              backgroundColor={video.backgroundColor}
              color={video.color}
              heading={video.heading}
              image={video.image}
              paragraph={video.paragraph}
              buttonData={buttonData}
              YouTube={<YouTube videoId={videoId} opts={opts} />}
              backgroundColor1="#FFB400"
              fontSize={24}
              text2={video.text2}
              text3={video.text3}
              text4={video.text4}
              text5={video.text5}
              text6={video.text6}
              text7={video.text7}
              number1={video.number1}

          />
      </div>
  ))}
  </div>
  )
}

export default ServiceVideo