import React from 'react'

function BannerRight({ bannerRightData }) {
  return (
    <div>
      {bannerRightData.length > 0 && <h3 className='fw-bold' >{bannerRightData[0].text}</h3>}
      {Array.isArray(bannerRightData) &&
        bannerRightData.slice(1).map((service, index) => (
          <div key={index}>
            <div className='d-flex pt-3'>
              <div>
                <img src={service.image} />
              </div>
              <div className='ps-3'>
                <h6 className='fw-bold'>{service.heading}</h6>
                <p>{service.paragraph}</p>
              </div>
              <div className='d-flex'>
                <img src={service.image1} alt='' />
                <img src={service.image2} className='ps-3' alt='' />
                <img src={service.image3} className='ps-3' alt='' />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default BannerRight