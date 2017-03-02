import React from 'react';

import { Hero, About, Capcom, GoingThere, BeingThere, ComingBack, Training } from './sections';
import { Nav } from './components';


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
    TweenMax.fromTo(`.sectionIntroButton_${nextIndex - 1}`,1.45, {autoAlpha: 0}, {autoAlpha: 1, delay: 1.86});

    TweenMax.staggerFromTo(`.sectionIntro_${nextIndex - 1}`, 1.25, {opacity:0, y: -70}, {opacity:1, y:0}, .3);

  }
  componentDidMount() {
    const self = this;
    $('#fullpage').fullpage({
      controlArrows: false,
      scrollOverflow: true,
      menu: '#nav',
      anchors: ['top','00','01','02','03','04','05'],
      easingcss3: 'ease-out',
      scrollingSpeed: 1000,
      onLeave: function(index, nextIndex){
        self._animateIntros(index, nextIndex);
        self.setState({
          currentIndex: nextIndex - 2,
        })
        if(nextIndex !== 1){
          self.setState({
            showNav: true,
          })
        } else {
          self.setState({
            showNav: false,
          })
        }
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
          currentIndex={currentIndex}
        />
        <div id="fullpage">
          <Hero />
          <About />
          <Capcom />
          <Training />
          <GoingThere />
          <BeingThere />
          <ComingBack/>
        </div>
      </div>
    )
  }
}
