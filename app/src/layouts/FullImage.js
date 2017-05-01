import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({image}) => (
  <div >

    <img className={css(styles.fullImage)} src={image} />
  </div>
)

const styles = StyleSheet.create({
  fullImage: {
    minWidth: '100vw',
    minHeight: '100vh',
  }
})
