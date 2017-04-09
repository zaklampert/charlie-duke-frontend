import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {formatOrderForMenu} from '../components/nav';

export default ({order, title, copy, buttonText}) => (
  <div className={css(styles.sectionIntro)}>
    <div className={`sectionIntro_${order} ` + css(styles.order)}>{formatOrderForMenu(order)}</div>
    <div className={`sectionIntro_${order} ` + css(styles.title)}>{title}</div>
    <div className={`sectionIntro_${order} ` + css(styles.copy)}><span dangerouslySetInnerHTML={{__html: copy}}/></div>
    <div className={`sectionIntroButton_${order} ` + css(styles.button)} onClick={()=>{$.fn.fullpage.moveSlideRight();}}>
      {buttonText}
    </div>
  </div>
);

const styles = StyleSheet.create({
  sectionIntro: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto',
  },
  order: {
    fontSize: '22px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '66px',
    fontFamily: '"futura-pt-bold"',
    fontWeight: '700',
  },
  copy: {
    fontSize: '22px',
    margin: '60px 0px',
  },
  button: {
    border: '3px solid white',
    padding: '22px 44px',
    display: 'block',
    maxWidth: '275px',
    margin: '20px auto',
    cursor: 'pointer',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: '22px',
    ':hover':{
      backgroundColor: 'white',
      color: 'black',
    }
  }
})
