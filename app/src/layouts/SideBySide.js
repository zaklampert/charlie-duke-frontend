import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({leftPhoto, leftCaption, rightPhoto, rightCaption}) => (
  <div className={css(styles.sideBySide)}>
    <div className={css(styles.half)}>
      <img className={css(styles.image)} src={leftPhoto} />
      <div className={css(styles.caption)}>{leftCaption}</div>

    </div>
    <div className={css(styles.half)}>
      <img className={css(styles.image)} src={rightPhoto} />
      <div className={css(styles.caption)}>{rightCaption}</div>
    </div>
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
