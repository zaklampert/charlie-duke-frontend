import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({content}) => (
  <div className={css(styles.sideBySide)}>
    <span dangerouslySetInnerHTML={{__html: content}} />
  </div>
)


const styles = StyleSheet.create({
  sideBySide: {
    maxWidth: '900px',
    margin: '0 auto',
    fontSize: '12px',
    clear: 'both',
  },
  half: {
    width: '48%',
    margin: '0 1%',
    display: 'inline-block',
  },
  image: {
    maxWidth: '100%',
  }
})
