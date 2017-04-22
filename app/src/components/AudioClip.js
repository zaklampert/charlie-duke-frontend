import React from 'react';

export default class AudioClip extends React.Component{
  render(){
    const {file} = this.props;
    return (
      <div>
        <audio controls style={{width: "100%"}}>
          <source src={file} type="audio/wav"/>
        </audio>
      </div>
    )
  }
}
