import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux'
import { pages } from './data';
import { Nav, InteriorNav, Modal } from './components';
import { About, Hero, Story } from './templates';
import * as actions from './actions';
import { mapDataToPage } from './data';
import { Loading } from './components';
import Intense from './lib/intense.min.js';


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
    TweenMax.fromTo(`.sectionIntroButton_${nextIndex - 1}`,1.25, {autoAlpha: 0}, {autoAlpha: 1, delay: .6});
    TweenMax.staggerFromTo(`.sectionIntro_${nextIndex - 1}`, 1, {opacity:0, y: -70}, {opacity:1, y:0}, .3);
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
      resetSliders: true,
      easingcss3: 'ease-out',
      scrollingSpeed: 700,
      scrollHorizontally: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      onLeave: function(index, nextIndex){
        // $.fn.fullpage.silentMoveTo(anchors[nextIndex - 1], 0);
        self._animateIntros(index, nextIndex);
        self.setState({
          currentIndex: nextIndex - 2,
          showNav: (nextIndex !== 1) ? true : false,
          title: `Charlie Duke // ${pages.data[nextIndex - 1].title}`,
          currentSectionTitle: pages.data[nextIndex - 1].title,
          showInteriorNav: false,
          currentAnchor: pages.data[nextIndex - 1].slug
        })
      },
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        self.setState({
          showNav: (nextSlideIndex === 0 ) ? true : false,
        })

      },
      afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){

        self.setState({
          showNav: (slideIndex === 0 ) ? true : false,
          showInteriorNav: (slideIndex === 0 ) ? false : true,
        })
      },
      afterRender: function(){
        const element = document.querySelectorAll( 'img' );
        console.log(element)
        Intense( element );
      }
    });

    }
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.getWPData());
  }
  render(){
    const { showNav, currentIndex, title, showInteriorNav, currentSectionTitle, currentAnchor } = this.state;
    const { pages, modal } = this.props;

    const anchors = pages.data && pages.data.map(page=>{
      return page.slug;
    });
    const storyPages = pages.data && pages.data.filter((page)=> {return page.template === "Story" || page.template === "About"});

     return (
      <div id="root" style={{
        fontFamily: `"futura-pt", sans-serif`,
        color: 'white',
        fontSize: '18px',
        background: '#171717'
      }}>
      {(modal.show) ? <Modal content={modal.content}/> : null}
      <Helmet
        title={title}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {(!pages.ready) ?
        <Loading /> :
        <span>

          <Nav
            show={showNav}
            anchors={anchors}
            currentIndex={currentIndex}
            storyPages={storyPages}
          />
          {(showInteriorNav) ?
            <InteriorNav
              currentSectionTitle={currentSectionTitle}
              currentAnchor={currentAnchor}
              currentIndex={currentIndex}
            /> : null}

          <div id="fullpage">
            {pages && pages.data && pages.data.map(page=>(
              React.createElement(Templates[page.template], {key: page.slug, page})
            ))}
          </div>
        </span>
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { pages, modal } = state

  return {
    pages,
    modal,
  }
}

export default connect(mapStateToProps)(App)
