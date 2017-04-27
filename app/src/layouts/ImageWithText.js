import React from 'react';
import { AudioClip } from '../components';
import { StyleSheet, css } from 'aphrodite';

export default ({image, content, caption, imageLink}) => (
  <div className={css(styles.imageWithText)}>
    <img data-src={image} style={{maxWidth: '100%', maxHeight: '80vh',display:'block',margin: '0 auto'}}/>
    {(imageLink) ? <AudioClip source={imageLink} /> : null }

    {caption}
    <span style={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: content}}/>
  </div>
)

const styles = StyleSheet.create({
  imageWithText: {
    maxWidth: '1440px',
    margin: '0 auto',
  }
})
