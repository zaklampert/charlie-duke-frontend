import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({image, content, caption}) => (
  <div className={css(styles.imageWithText)}>
    <img src={image} style={{maxWidth: '100%', maxHeight: '80vh',display:'block',margin: '0 auto'}}/>
    {caption}
    <span dangerouslySetInnerHTML={{__html: content}}/>
  </div>
)

const styles = StyleSheet.create({
  imageWithText: {
    maxWidth: '900px',
    margin: '0 auto',
  }
})
