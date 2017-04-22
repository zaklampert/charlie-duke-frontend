import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import heroBackground from '../images/backgrounds/duke.jpg';
import '../css/progressBar.css';

export default () => (
  <div>
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
    <div className={css(styles.loading)}>
    </div>
  </div>
)

const styles = StyleSheet.create({
  loading: {
    backgroundImage: `url(${heroBackground})`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: '76% center',
    filter: 'blur(5px)',
    zIndex: '1',
  }
})
