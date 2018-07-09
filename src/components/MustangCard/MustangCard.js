import React from "react";
import "./MustangCard.css";

const MustangCard = props => (
  <div className="col-3">
    <div className="card mx-auto ">
      <div className="img-container">
        <img alt={props.name} src={props.image} data-id={props.id} className="img-fluid img-thumbnail" onClick={() => props.handleIncrement(props.id)}/>
      </div>
    </div>
  </div>
);


export default MustangCard;