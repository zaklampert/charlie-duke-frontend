import React from 'react';
import { AudioClip } from '../components';
import { StyleSheet, css } from 'aphrodite';
import {showModal} from '../actions';
import {connect} from 'react-redux';

const ImageWithText = ({image, content, caption, imageLink, openModal, dispatch, imageWidth, imageHeight}) => {
  const isPortrait = ((imageWidth / imageHeight) < 1);

  return <div className={css(styles.imageWithText)}>
    <div style={{
      maxWidth: `${imageWidth}px`,
      margin: '0 auto',
      display: 'block',
      position: 'relative',
    }}>

      <img src={image} style={{width: '100%', maxHeight: '70vh'}} onClick={()=>dispatch(showModal({content: image}))}/>
      {(imageLink) ? <AudioClip source={imageLink} /> : null }

      {caption}
      <div style={{ padding: '5px 15px'}} dangerouslySetInnerHTML={{__html: content}}></div>
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
