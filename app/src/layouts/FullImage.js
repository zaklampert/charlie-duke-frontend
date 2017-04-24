import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({image}) => (
  <div>
    <img data-src={image} style={{maxWidth: '100%'}}/>
  </div>
)

const styles = StyleSheet.create({
  fullImage: {
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
  }
})
