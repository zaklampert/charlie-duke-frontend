import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({quote}) => (
  <div className={css(styles.quote)}>
    {quote}
  </div>
);


const styles = StyleSheet.create({
  quote: {
    maxWidth: '500px',
    margin: '0 auto',
    fontSize: '53px',
    '@media (max-width: 670px)': {
      fontSize: '20px'
    }
  }
})
