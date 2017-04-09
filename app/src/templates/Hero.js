import React from 'react';
import { FullPageSlide, FullPageSection } from '../layouts';
import { StyleSheet, css } from 'aphrodite';

export default ({page}) => (
  <FullPageSection>
    <FullPageSlide
      theme="dark"
      background={page.background}
    >
      <div className={css(styles.title)}>
        {page.title}
      </div>
    </FullPageSlide>
  </FullPageSection>
)

const styles = StyleSheet.create({
  title: {
    fontSize: '78px',
    textAlign: 'center',
    fontFamily: '"futura-pt-bold", sans-serif',
  }
})
