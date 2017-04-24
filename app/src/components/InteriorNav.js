import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({show, currentSectionTitle, currentAnchor, currentIndex}) => (
  <div className={css(styles.interiorNav)}>
    <span onClick={()=>{$.fn.fullpage.moveTo(currentAnchor, 0);}}>
      <i className="fa fa-caret-left" aria-hidden="true"></i> <span style={{fontWeight:'lighter'}}>0{currentIndex}</span> {currentSectionTitle}
    </span>
  </div>
)
const styles = StyleSheet.create({
  interiorNav: {
    position: 'absolute',
    top: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '99',
    fontWeight: 'bold',
    color: 'black',
    cursor: 'pointer',
    fontSize: '13px',
  }
})
