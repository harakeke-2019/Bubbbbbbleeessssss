import React from 'react';
import sound from './sounds/bensound-buddy.mp3'
import sound2 from './sounds/bensound-dubstep.mp3'
import sound3 from './sounds/bensound-betterdays.mp3'

import { Button } from 'semantic-ui-react'

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      'play': false 
    };
    this.url = sound
    this.url2 = sound2
    this.url2 = sound3
    this.audio = new Audio(this.url);
    this.audio2 = new Audio(this.url2);
    this.audio3 = new Audio(this.url3);
}

togglePlay = () => {
    this.setState({'play': !this.state.play}, () => {
      if(this.state.play) {
        this.audio.play()
        this.audio2.play()
        this.audio3.play()
      } else {
        this.audio.pause();
        this.audio2.pause();
        this.audio3.pause();
      }
    });
}

componentWillUnmount () {
    this.audio.pause();
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
            
        </div>
    );
}
}

export default Music;