import React from 'react';
import Helmet from 'react-helmet';
import { pages } from './data';
import { Nav } from './components';
import { About, Hero, Story } from './templates';

const Templates = {
  About,
  Hero,
  Story,
}
const anchors = pages.map(page=>{
  return page.slug;
})

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showNav: false,
      currentIndex: null,
      title: "Charlie Duke",
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
          showNav: (nextIndex !== 1) ? true : false,
          title: `Charlie Duke // ${pages[nextIndex - 1].title}`,
        })

      }
    });
  }
  render(){
    const { showNav, currentIndex, title } = this.state;
    return (
      <div id="root" style={{
        fontFamily: `"futura-pt", sans-serif`,
        color: 'white',
        background: '#171717'
      }}>
      <Helmet
        title={title}
      />
        <Nav
          show={showNav}
          anchors={anchors}
          currentIndex={currentIndex}
        />
        <div id="fullpage">
          {pages.map(page => (
            React.createElement(Templates[page.template], {key: page.slug, page})
          ))}
        </div>
      </div>
    )
  }
}
