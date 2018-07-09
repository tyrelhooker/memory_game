import React from "react";
// import MustangCard from "./MustangCard";

// By extending the React.Component class, Counter inherits functionality from it
const Counter = props => (
  // Setting the initial state of the Counter component
  // state = {
  //   count,
  //   topScore
  // };

  // The render method returns the JSX that should be rendered
  // render() {
  //   return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Score Counter!</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Current Score: {props.count}</p>
          <p className="card-text">Top Score: {props.topScore}</p>
        </div>
      </div>
  //   );
  // }
);

export default Counter;