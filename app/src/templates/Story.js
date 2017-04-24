import React from 'react';
import { FullPageSlide, FullPageSection, SectionIntro, ImageWithText, SideBySide, Default, FullImage } from '../layouts';

const Layouts = {
  ImageWithText,
  SideBySide,
  Default,
  FullImage,
};

export default ({page}) => (
  <FullPageSection
    key={page.slug}>
    <FullPageSlide
      background={page.background}
      theme="dark"
    >
      <SectionIntro
        order={page.order}
        title={page.title}
        copy={page.content}
        buttonText="Explore"
      />
    </FullPageSlide>
    {page.children && page.children.length > 0 && page.children.map(child => (
      <FullPageSlide
        key={child.slug}
        theme="light">
        {React.createElement(Layouts[child.template], child)}
      </FullPageSlide>
    ))}
  </FullPageSection>
)
