import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default ({}) => (
  <div className="section">
    <div className={css(styles.quote)}>
      "As an American, it was my honor to serve my country by going to the moon aboard Apollo 16 and becoming the 10th man to walk on the
      lunar surface”
    </div>
  </div>
);


const styles = StyleSheet.create({
  quote: {
    maxWidth: '500px',
    margin: '0 auto',
    fontSize: '53px'
  }
})
