import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FullPageSlide, FullPageSection, SectionIntro, ImageWithText, SideBySide, Default, FullImage, Quote } from '../layouts';

const Layouts = {
  ImageWithText,
  SideBySide,
  Default,
  FullImage,
  Quote,
};

export default ({page}) => (
  <FullPageSection>
    <FullPageSlide>
      <Quote
        content={page.content}
      />
    </FullPageSlide>
    <FullPageSlide
      theme="dark">
        {page.children && page.children.length > 0 && page.children.map(child => (
          <FullPageSlide
            key={child.slug}
            theme="light">
            {React.createElement(Layouts[child.template], child)}
          </FullPageSlide>
        ))}
      </FullPageSlide>
  </FullPageSection>
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
