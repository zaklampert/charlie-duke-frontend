import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AudioClip } from '../components';

export default ({leftPhoto, leftCaption, rightPhoto, rightCaption}) => (
  <div className={css(styles.sideBySide)}>
    <div className={css(styles.half)}>
      <img className={css(styles.image)} data-src={leftPhoto} />
      {/* <AudioClip
        file="https://s3.amazonaws.com/storage.brmbl.in/outofhand.wav"
      /> */}
      <span className={css(styles.caption)}  dangerouslySetInnerHTML={{__html: leftCaption}}/>

    </div>
    <div className={css(styles.half)}>
      <img className={css(styles.image)} data-src={rightPhoto} />
      <span className={css(styles.caption)} dangerouslySetInnerHTML={{__html: rightCaption}}/>
    </div>
  </div>
)


const styles = StyleSheet.create({
  sideBySide: {
    maxWidth: '900px',
    margin: '0 auto',
    // fontSize: '12px',
    clear: 'both',
  },
  half: {
    width: '48%',
    margin: '0 1%',
    display: 'inline-block',
  },
  image: {
    maxWidth: '100%',
  }
})
