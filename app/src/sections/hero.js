import React from 'react';
import background from '../images/backgrounds/hero.jpg';
import { StyleSheet, css } from 'aphrodite';

export default ({}) => (
  <div className="section" style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
  }}>
    <div className={css(styles.title)}>
      Charlie Duke
    </div>
  </div>
);

const styles = StyleSheet.create({
  title: {
    fontSize: '78px',
    textAlign: 'center',
    fontFamily: '"futura-pt-bold", sans-serif',
  }
})
