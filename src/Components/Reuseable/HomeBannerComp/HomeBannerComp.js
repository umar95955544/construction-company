import React from 'react'
import Button from '../Button/Button'
import Styles from './HomeBannerComp.module.scss'

function HomeBannerComp({ image, heading, paragraph, btnData, color }) {
  return (
    <div className='text-center'>
      <div className='py-3'>
        <img src={image} alt='' />
      </div>
      <div className='py-2'>
        <h1 style={{color}} className={Styles.head}>{heading}</h1>
        <p style={{color}} className='pt-2'>{paragraph}</p>
      </div>
      <div>
        {Array.isArray(btnData) &&
          btnData.slice().map((btn, index) => (
            <Button
              padding={btn.padding}
              backgroundColor={btn.backgroundColor}
              text={btn.text}
              border={btn.border}
              color={btn.color}
              onclick={btn.onclick}
            />
          ))}
      </div>
    </div>
  )
}

export default HomeBannerComp