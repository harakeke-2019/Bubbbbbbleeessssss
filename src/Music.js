import React from 'react';
import sound from './sounds/2020.mp3'
import sound2 from './sounds/DoForLove.mp3'
import sound3 from './sounds/OnceWere.mp3'
import sound4 from './sounds/Toto.mp3'
import sound5 from './sounds/Queen.mp3'
import sound6 from './sounds/airhorn.wav'

import { Button } from 'semantic-ui-react'

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      'play': false 
    };
    this.url = sound
    this.url2 = sound2
    this.url3 = sound3
    this.url4 = sound4
    this.url5 = sound5
    this.url6 = sound6
    this.audio = new Audio(this.url);
    this.audio2 = new Audio(this.url2);
    this.audio3 = new Audio(this.url3);
    this.audio4 = new Audio(this.url4);
    this.audio5 = new Audio(this.url5);
    this.audio6 = new Audio(this.url6)
}

togglePlay = () => {
    this.setState({'play': !this.state.play}, () => {
      if(this.state.play) {
        this.audio.play()
        this.audio2.play()
        this.audio3.play()
        this.audio4.play()
        this.audio5.play()
      } 
    });
}

play = () => {
  this.audio6.play()
}

render() {
    return (
        <div>
          
                <Button 
                onClick={this.togglePlay}
                positive style={{
                left: '50%',
                fontSize: '20px',
                heigth:"30px", 
                width:"200px"
                }}>
                  PLAY
                </Button>

          <button class="big ui right labeled icon button" onClick={() => this.play()}>
          <i class="left arrow icon"></i>
          Go back..
          </button>
            
        </div>
    );
}
}

export default Music;