import React from 'react';
import { sections } from './data';
import { Hero, About, Capcom, GoingThere, BeingThere, ComingBack, Training } from './sections';
import { Nav } from './components';
import { FullPageSection, FullPageSlide, SectionIntro, ImageWithText, SideBySide} from './layouts';

const Layouts = {
  ImageWithText,
  SideBySide
}

const sectionSlugs = sections.map(section=>{
  return section.slug;
})


const anchors = [
  'hero',
  'about',
  ...sectionSlugs,
]



export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showNav: false,
      currentIndex: null
    }
    this._animateIntros = this._animateIntros.bind(this);
  }
  _animateIntros(index, nextIndex) {
    TweenMax.fromTo(`.sectionIntroButton_0${nextIndex - 2}`,1.45, {autoAlpha: 0}, {autoAlpha: 1, delay: 1.86});
    TweenMax.staggerFromTo(`.sectionIntro_0${nextIndex - 2}`, 1.25, {opacity:0, y: -70}, {opacity:1, y:0}, .3);
  }
  componentDidMount() {
    const self = this;
    $('#fullpage').fullpage({
      controlArrows: false,
      scrollOverflow: true,
      menu: '#nav',
      anchors,
      easingcss3: 'ease-out',
      scrollingSpeed: 1000,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      onLeave: function(index, nextIndex){
        self._animateIntros(index, nextIndex);
        self.setState({
          currentIndex: nextIndex - 2,
        })
        self.setState({
          showNav: (nextIndex !== 1) ? true : false,
        })
      }
    });
  }
  render(){
    const { showNav, currentIndex } = this.state;
    return (
      <div id="root" style={{
        fontFamily: `"futura-pt", sans-serif`,
        color: 'white',
        background: '#171717'
      }}>
        <Nav
          show={showNav}
          anchors={anchors}
          currentIndex={currentIndex}
        />
        <div id="fullpage">
          <Hero />
          <About />
          {sections.map(section=>(
            <FullPageSection
              key={section.slug}>
              <FullPageSlide
                background={section.background}
                theme="dark"
              >
                <SectionIntro
                  order={section.order}
                  title={section.title}
                  copy={section.copy}
                  buttonText="Explore"
                />
              </FullPageSlide>
              {section.children && section.children.map(child => (
                <FullPageSlide
                  key={child.slug}
                  theme="light">
                  {React.createElement(Layouts[child.template], child)}
                </FullPageSlide>
              ))}
            </FullPageSection>
          ))}

        </div>
      </div>
    )
  }
}
