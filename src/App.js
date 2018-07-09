import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import MustangCard from "./components/MustangCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import mustangs from "./mustangs.json";

let clickedMustangs = [];
// let message="";

class App extends Component {
  state = {
    count: 0,
    topScore: 0,
    maxScore: 12,
    mustangs,
    clickedMustangs,
    message: "Click on a Card to Begin!"
  };

  handleIncrement = (id) => {
    console.log(id);
    if (clickedMustangs.indexOf(id) === -1){
      clickedMustangs.push(id);
      // message = "You did not choose a duplicate card! Keep going!";
      console.log(clickedMustangs);
      if (this.state.count + 1 === this.state.maxScore) {
        this.setState({
          message: "You won the game!",
          count: 0,
          topScore: 0,
        })
        clickedMustangs = [];
        this.shuffleCards(mustangs);
      } 
      else if (this.state.count +1 > this.state.topScore) {
        // this.setState({ topScore: this.state.count +1 });
        this.setState({ 
          count: this.state.count + 1,
          message: "You did not choose a duplicate card! Keep going!"
        });
        this.shuffleCards(mustangs);
      }
    }  
    else {
      console.log("You lose");
      this.resetGame();
    }
  };

  resetGame = () => {
    this.setState({
      count: 0,
      message: "You clicked a duplicate card. You lose."
    });
    clickedMustangs = [];
    console.log(clickedMustangs);
    this.shuffleCards(mustangs);
  }

  shuffleCards = (array) => {
    var currentIndex = array.length, tempValue, randIndex;
    while (0 !== currentIndex) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = array[currentIndex];
      array[currentIndex] = array[randIndex];
      array[randIndex] = tempValue;
    }
    return array;
  }

  render() {
    return (
      <Wrapper>
        <Navbar 
          message={this.state.message}
          count={this.state.count}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Title>Mustangs</Title>
        <div className="row mx-auto">

          {this.state.mustangs.map(mustang => (
            <MustangCard
              count={this.state.count}
              handleIncrement={this.handleIncrement}
              id ={mustang.id}
              key={mustang.id}
              image={mustang.image}
            />
          ))}

        </div>
      </Wrapper>
    );
  }
}


export default App;
