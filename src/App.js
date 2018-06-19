import React, { Component } from 'react';
import logo from './images/eds-game.jpg';
import EdCard from "./components/EdCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import eds from "./eds.json";
import "./App.css";
import Navbar from './components/Navbar'


class App extends Component {
  // Setting this.state.eds to the eds json array
  state = {
    message: "Click on an image to begin!",
    topScore: 0,
    playerScore: 0,
    eds: eds,
    unselectedEds: eds
}

componentDidMount() {
}

shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


selectEds = character => {
  const findEds = this.state.unselectedEds.find(item => item.character === character);
  console.log(character)
    if(character.clicked === false){
        character.clicked = true;
        this.setState({
            playerScore: this.state.playerScore + 1,
            message: "You guessed right!"
        })
    } else {
        console.log("already clicked")
        this.setState({ 
   message: "You guessed wrong!",
topScore: (this.state.playerScore > this.state.topScore) ? this.state.playerScore : this.state.topScore,
playerScore: 0,
 });
        
    }


  this.shuffleArray(eds);
};

  // Map over this.state.eds and render an EdCard component for each ed object
  render() {
    return (


      <Wrapper>
      <Navbar
          message={this.state.message}
          playerScore={this.state.playerScore}
          topScore={this.state.topScore}
      />
      <Title />
      {
          this.state.eds.map(ed => (
              <EdCard
                  key={ed.id}
                  name={ed.name}
                  ed={ed}
                  image={ed.image}
                  selectEds={this.selectEds} 
                  playerScore={this.state.playerScore}
              />
          ))
      }
  </Wrapper>

    );
  }
}

export default App;

