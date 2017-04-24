import React from 'react';

export default class AudioClip extends React.Component{
  render(){
    const {source} = this.props;
    return (
      <div>
        <audio controls style={{width: "100%"}}>
          <source src={source} type="audio/wav"/>
        </audio>
      </div>
    )
  }
}
