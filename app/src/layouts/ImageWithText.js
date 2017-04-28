import React from 'react';
import { AudioClip } from '../components';
import { StyleSheet, css } from 'aphrodite';
import {showModal} from '../actions';
import {connect} from 'react-redux';

const ImageWithText = ({image, content, caption, imageLink, openModal, dispatch}) => {
  return <div className={css(styles.imageWithText)}>
    <img src={image} style={{maxWidth: '100%', maxHeight: '80vh',display:'block',margin: '0 auto'}} onClick={()=>dispatch(showModal({content: image}))}/>
    {(imageLink) ? <AudioClip source={imageLink} /> : null }

    {caption}
    <span style={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: content}}/>
  </div>
}

const styles = StyleSheet.create({
  imageWithText: {
    maxWidth: '1440px',
    margin: '0 auto',
  }
})

export default connect()(ImageWithText);
