import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({image}) => (
  <div className={css(styles.fullImage)} style={{backgroundImage: `url(${image})`}}></div>
)

const styles = StyleSheet.create({
  fullImage: {
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
  }
})
