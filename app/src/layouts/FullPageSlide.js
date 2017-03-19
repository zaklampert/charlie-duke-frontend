import React from 'react';

export default class FullPageSlide extends React.Component{
  render(){
    const { children, background, theme } = this.props;
    return (
      <div className="slide" style={{
        backgroundImage: `url("${background}")`,
        // XXX: Smarter theming
        backgroundColor: (theme === "light") ? 'white' : 'initial',
        backgroundSize: 'cover',
        color: (theme === "light") ? 'black' : 'white',
      }}>
        {children}
      </div>
    )
  }
}
