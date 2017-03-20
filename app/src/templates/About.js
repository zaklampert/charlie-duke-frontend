import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FullPageSlide, FullPageSection } from '../layouts';


export default ({page}) => (
  <FullPageSection>
    <FullPageSlide
      theme="dark">
        <div className={css(styles.quote)}>
        "{page.quote}"
        </div>
      </FullPageSlide>
  </FullPageSection>
);


const styles = StyleSheet.create({
  quote: {
    maxWidth: '500px',
    margin: '0 auto',
    fontSize: '53px'
  }
})
