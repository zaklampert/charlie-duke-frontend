import React from 'react';
import { Hero, About, Capcom, GoingThere, BeingThere, ComingBack, Training } from './sections';
import { Nav } from './components';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showNav: false,
    }
  }
  componentDidMount() {
    const self = this;
    $('#fullpage').fullpage({
      controlArrows: false,
      scrollOverflow: true,
      menu: '#nav',
      anchors: ['top','00','01','02','03','04','05'],
      onLeave: function(index, nextIndex){
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
    return (
      <div id="root" style={{
        fontFamily: `"futura-pt", sans-serif`,
        color: 'white',
        background: '#171717'
      }}>
        <Nav show={this.state.showNav}/>
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
