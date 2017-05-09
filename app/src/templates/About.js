import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {buttons} from '../layouts/SectionIntro';
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
      <div className={css(buttons.button)} onClick={()=>{$.fn.fullpage.moveSlideRight();}}>
        About Charlie
      </div>
    </FullPageSlide>
        {page.children && page.children.length > 0 && page.children.map(child => {
          return <FullPageSlide
            key={child.slug}
            theme="light">
            {React.createElement(Layouts[child.template], child)}
          </FullPageSlide>
        })}
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
