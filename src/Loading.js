import React from 'react'
import sound from './sounds/time-travel.mp3'

class Loading extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        'play': false
      };

      this.url = sound
      this.audio = new Audio(this.url);
  }
  togglePlay = () => {
    this.setState({'play': !this.state.play}, () => {
      if(this.state.play) {
        this.audio.play()
      } else {
        this.audio.pause();
      }
    });
  }
  componentWillUnmount () {
    this.audio.pause();
  }




  render () {


    return (
      <div>
        <h2>Loading your search results...</h2>
        <div class="ui placeholder segment">
        {/* <div class="ui big active text loader">To infinity and beyond
        </div> */}
        <div class="ui active big progress">
        <div class="bar"></div>
        <div class="label">To infinity and beyond</div>
        </div>
        </div>
        <button onClick={this.togglePlay} class="big ui right labeled icon button">
        <i class="left arrow icon"></i>
        Go back in time
        </button>
      </div>
    )
  }
}

export default Loading 