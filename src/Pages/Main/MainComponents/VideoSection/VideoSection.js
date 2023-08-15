import React, {useContext} from 'react'
import VideoSectionComp from '../../../../Components/Reuseable/VideoSectionComp/VideoSectionComp'
import YellowLine from '../../../../Assets/Images/NoProjectYellowLine.svg'
import YouTube from 'react-youtube';
import { DarkModeContext } from '../../../../Assets/Context/DarkModeContext';


function VideoSection() {
  const {darkMode} = useContext(DarkModeContext);
  const videoData = [{
            backgroundColor: '#2A2A2A',
            color: '#fff',
            heading: 'We’ve Been Building For Over 10 Years',
            image: YellowLine,
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.',
            text3: ' ',
            text4: ' ',
            text5: ' ',
            onclick:'/about',
            text2: 'Call for a Quote',
            number1:'(346) 234-6973',
          }];
  const buttonData = [{
                padding:'0.8rem 2.5rem',
                backgroundColor:'#2A2A2A',
                text:'ABOUT US',
                color:'#FFB400',
                border:'4px solid #FFB400',
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
              onclick={video.onclick}
              number1={video.number1}

          />
      </div>
  ))}
  </div>
  )
}

export default VideoSection