import React from 'react';
import Howler from 'howler';
function formatTime(seconds)
{
    // Hours, minutes and seconds
    let time = Math.round(seconds);
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

export default class AudioClip extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      playing: false,
      ended: false,
      currentPosition: 0,
      paused: false,
    }
    this.interval = setInterval(this._getPosition.bind(this), 500);
  }
  componentDidMount(){
    const {source} = this.props;
    const self = this;
    this.audio = new Howl({
      src: [source],
      onplay: ()=>{
        self.setState({
          playing: true,
          paused: false,
        })
      },
      onstop: ()=>{
        self.setState({
          playing: false,
          paused: false,
        })
      },
      onload: ()=>{
        self.setState({
          loaded: true,
        })
      },
      onend: ()=>{
        self.setState({
          ended: true,
          playing: false,
        })
      },
      onpause: ()=>{
        self.setState({
          // playing: false,
          paused: true,
        })
      }
    });


  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  _getPosition(){
    const {playing, ended, paused} = this.state;

    this.audio &&  playing && !paused && this.setState({
      currentPosition: this.audio.seek()
    })
  }
  render(){
    const { loaded, playing, currentPosition, ended, paused } = this.state;
    if (!loaded) {
      return (
        <span>
          <i className="fa fa-spinner fa-pulse fa-fw"></i>
        </span>
      )
    }

    if (playing) {

      return (
        <span >
          {(ended && !playing) ? <i onClick={()=>this.audio.play()} className="fa fa-repeat" aria-hidden="true"></i> : null }
          {(paused) ?
            <i onClick={()=>this.audio.play()} className="fa fa-play-circle" aria-hidden="true"></i> :
            <i onClick={()=>this.audio.pause()} className="fa fa-pause-circle" aria-hidden="true"></i>
          }
          <i onClick={()=>{this.audio.stop()}} className="fa fa-stop-circle" aria-hidden="true"></i>
          <span > {`${formatTime(currentPosition)} / ${formatTime(this.audio.duration())}`}</span>
        </span>
      )
    }

    return (
      <span onClick={()=>{this.audio.play()}}>
        <i className="fa fa-headphones" aria-hidden="true"></i>
        {formatTime(this.audio.duration())}
      </span>
    )

  }
}
