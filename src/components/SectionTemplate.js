import React from 'react';
import './SectionTemplate.css';


const SectionTemplate = ({
  bgColor,
  secOrie,
  topLine,
  subHeader,
  subColor,
  topColor,
  textColor,
  textDesc,
  textDescTwo,
  img,
  alt
}) => {
  return(
    <>
      <div className={bgColor ? 'section-container' : 'section-container dark'}>
        <div className={secOrie? 'sec-orie' : 'reverse'}>
          <div className='img-area'>
            <img src={img} alt={alt} className='section-img' />
          </div>
          <div className='text-area'>
            <div className={topColor ? 'top-line' : 'top-line-dark'}>{topLine}</div>
            <div className={subColor ? 'sub-header' : 'sub-header-dark'}>{subHeader}</div>
            <h3 className={textColor ? 'text-content' : 'text-content-dark'}>{textDesc}</h3>
            <h3 className={textColor ? 'text-content' : 'text-content-dark'}>{textDescTwo}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTemplate;