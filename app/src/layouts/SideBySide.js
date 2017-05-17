import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AudioClip, VideoPlayer } from '../components';

export default ({leftPhoto, leftCaption, rightPhoto, rightCaption, leftVideo, rightVideo, leftImageLink, rightImageLink}) => (
  <div className={css(styles.sideBySide)}>
    <div className={css(styles.half)}>
      <div style={{
        display: 'table'
      }}>
      {(leftVideo) ? <VideoPlayer video={leftVideo}/> : <img className={css(styles.image)} data-src={leftPhoto}  data-image={leftPhoto}/> }



      <div style={{
        display: 'table-caption',
        captionSide: 'bottom',
      }}>
      <div className={css(styles.caption)}  dangerouslySetInnerHTML={{__html: leftCaption}}/>
      {(leftImageLink) ? <span style={{display: 'block', margin: '0 auto', textAlign:'center'}}><AudioClip source={leftImageLink} /></span> : null }
      </div>
      </div>
    </div>
    <div className={css(styles.half)}>
      <div style={{
        display: 'table'
      }}>
      {(rightVideo) ? <VideoPlayer video={rightVideo}/> : <img className={css(styles.image)} data-src={rightPhoto} data-image={rightPhoto} /> }


            <div style={{
              display: 'table-caption',
              captionSide: 'bottom',
            }}>  <div className={css(styles.caption)} dangerouslySetInnerHTML={{__html: rightCaption}}/>
              {(rightImageLink) ?<span style={{display: 'block', margin: '0 auto', textAlign:'center'}}> <AudioClip source={rightImageLink} /></span> : null }
          </div>
    </div>
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
    // padding: '5px 20px',
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
