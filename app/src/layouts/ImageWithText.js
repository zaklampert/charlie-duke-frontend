import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({image, text, caption}) => (
  <div className={css(styles.imageWithText)}>
    <img src={image} style={{maxWidth: '100%'}}/>
    {caption}
    {text}
  </div>
)

const styles = StyleSheet.create({
  imageWithText: {
    maxWidth: '900px',
    margin: '0 auto',
  }
})
