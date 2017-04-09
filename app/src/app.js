import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux'
import { pages } from './data';
import { Nav } from './components';
import { About, Hero, Story } from './templates';
import { getWPData } from './actions';
import { mapDataToPage } from './data';

const Templates = {
  About,
  Hero,
  Story,
}


class App extends React.Component {
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
    TweenMax.fromTo(`.sectionIntroButton_${nextIndex - 1}`,1.45, {autoAlpha: 0}, {autoAlpha: 1, delay: 1.86});
    TweenMax.staggerFromTo(`.sectionIntro_${nextIndex - 1}`, 1.25, {opacity:0, y: -70}, {opacity:1, y:0}, .3);
  }
  componentDidUpdate(prevProps) {
    const { pages } = this.props;
    const self = this;
    if ( !prevProps.pages.ready && pages.ready ){
    const anchors = pages.data && pages.data.map(page=>{
      return page.slug;
    });
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
          title: `Charlie Duke // ${pages.data[nextIndex - 1].title}`,
        })
      }
    });
    }
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getWPData());
  }
  render(){
    const { showNav, currentIndex, title } = this.state;
    const { pages } = this.props;

    if(!pages.ready){
      return (
        <div>loading...</div>
      )
    }
    const anchors = pages.data && pages.data.map(page=>{
      return page.slug;
    });
    const storyPages = pages.data && pages.data.filter((page)=> {return page.template === "Story" || page.template === "About"});

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
          storyPages={storyPages}
        />
        <div id="fullpage">
          {pages && pages.data && pages.data.map(page=>(
            React.createElement(Templates[page.template], {key: page.slug, page})
          ))}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { pages } = state

  return {
    pages
  }
}

export default connect(mapStateToProps)(App)
