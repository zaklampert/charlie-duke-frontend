import React from 'react';
import { AudioClip, VideoPlayer } from '../components';
import { StyleSheet, css } from 'aphrodite';
import {showModal} from '../actions';
import {connect} from 'react-redux';

const ImageWithText = ({image, content, caption, imageLink, openModal, dispatch, imageWidth, imageHeight, video}) => {
  const isPortrait = ((imageWidth / imageHeight) < 1);

  return <div className={css(styles.imageWithText)}>
    <div style={{
      maxWidth: (isPortrait) ? '800px' : `${imageWidth}px`,
      margin: '0 auto',
      display: 'block',
      position: 'relative',
    }}>
      {(video && video.length > 0) ?
        <VideoPlayer video={video}/> :
        <img src={image}
             style={{maxWidth: '100%', maxHeight: '70vh', margin: '0 auto', display: 'block', cursor:'zoom-in'}}
             onClick={()=>dispatch(showModal({content: image}))}/>
      }
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '5px 15px'
      }}>
      {(imageLink) ? <AudioClip source={imageLink} /> : null }

      {caption}
      <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    </div>
  </div>
}

const styles = StyleSheet.create({
  imageWithText: {
    maxWidth: '1440px',
    margin: '0 auto',
  }
})

export default connect()(ImageWithText);
