import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import MustangCard from "./components/MustangCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import mustangs from "./mustangs.json";

class App extends Component {
  state = {
    mustangs
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        <Title>Mustangs</Title>
        <div className="row mx-auto">
          {this.state.mustangs.map(mustang => (
            <MustangCard
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

// const App = () => (
//   <div className="container">
//     <Navbar />
//     <Jumbotron />
//     <MustangCard />
//   </div>
// );

export default App;
