import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import MustangCard from "./components/MustangCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import mustangs from "./mustangs.json";

const clickedMustangs = [];

class App extends Component {
  state = {
    count: 0,
    topScore: 0,
    mustangs,
    clickedMustangs
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    this.shuffleCards(mustangs);
    if (this.state.count > this.state.topScore) {
      this.state.topScore= this.state.count;
    }
  };

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
              // name={mustang.name}
              image={mustang.image}
            />
          ))}

        </div>
      </Wrapper>
    );
  }
}


export default App;
