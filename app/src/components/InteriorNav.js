import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import '../css/chevrons.css';

export default ({show, currentSectionTitle, currentAnchor, currentIndex, currentSlide, totalSlides}) => (
  <div>
    <span className={css(styles.interiorNavTop)} onClick={()=>{$.fn.fullpage.moveTo(currentAnchor, 0);}}>
      <i className="fa fa-caret-left" aria-hidden="true"></i> <span style={{fontWeight:'lighter'}}>0{currentIndex}</span> {currentSectionTitle}
    </span>
    <span className={css(styles.interiorNavLeft)} onClick={()=>{$.fn.fullpage.moveSlideLeft()}}>
      <div className={css(styles.leftNumber)}>
        {(currentSlide < 10) ? `0${currentSlide}` : currentSlide }
      </div>
      <div className={css(styles.leftDividingBar)}></div>
      <div className={css(styles.leftNumber)}>
        {(totalSlides < 10 ) ? `0${totalSlides}` : totalSlides }
      </div>
    </span>
    <span className={css(styles.interiorNavRight)} onClick={()=>{$.fn.fullpage.moveSlideRight()}}>
      <span className="chevron right"></span>
    </span>

  </div>
)
const styles = StyleSheet.create({
  interiorNavTop: {
    position: 'absolute',
    top: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '99',
    fontWeight: 'bold',
    color: 'black',
    cursor: 'pointer',
    fontSize: '13px',
  },
  interiorNavRight: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-32%)',
    right: '22px',
    zIndex: '99',
    fontSize: '88px',
    color: 'black',
    cursor: 'pointer',
  },
  interiorNavLeft: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '22px',
    zIndex: '99',
    fontWeight: 'lighter',
    color: 'black',
    cursor: 'pointer',
  },
  leftNumber: {
    fontSize: '20px',
    padding: '20px',
  },
  leftDividingBar: {
    height: '2px',
    display: 'block',
    width: '100%',
    background: 'black',
  }
})
