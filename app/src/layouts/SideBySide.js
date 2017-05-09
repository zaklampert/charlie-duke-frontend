import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AudioClip, VideoPlayer } from '../components';

export default ({leftPhoto, leftCaption, rightPhoto, rightCaption, leftVideo, rightVideo, leftImageLink, rightImageLink}) => (
  <div className={css(styles.sideBySide)}>
    <div className={css(styles.half)}>
      {(leftVideo) ? <VideoPlayer video={leftVideo}/> : <img className={css(styles.image)} data-src={leftPhoto}  data-image={leftPhoto}/> }
      {(leftImageLink) ? <AudioClip source={leftImageLink} /> : null }


      <div className={css(styles.caption)}  dangerouslySetInnerHTML={{__html: leftCaption}}/>

    </div>
    <div className={css(styles.half)}>
      {(rightVideo) ? <VideoPlayer video={rightVideo}/> : <img className={css(styles.image)} data-src={rightPhoto} data-image={rightPhoto} /> }
      {(rightImageLink) ? <AudioClip source={rightImageLink} /> : null }
      <div className={css(styles.caption)} dangerouslySetInnerHTML={{__html: rightCaption}}/>
    </div>
  </div>
)


const styles = StyleSheet.create({
  sideBySide: {
    maxWidth: '1440px',
    margin: '0 auto',
    // fontSize: '12px',
    clear: 'both',
  },
  caption: {
    padding: '5px 20px',
  },
  half: {
    width: '48%',
    margin: '0 1%',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  image: {
    maxWidth: '100%',
  }
})
