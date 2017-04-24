import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({content}) => (
  <div className={css(styles.defaultLayout)}>
    <span dangerouslySetInnerHTML={{__html: content}} />
  </div>
)


const styles = StyleSheet.create({
  defaultLayout: {
    maxWidth: '900px',
    margin: '0 auto',
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
