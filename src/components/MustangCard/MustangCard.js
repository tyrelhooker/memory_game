import React from "react";

const MustangCard = props => (
  <div className="col-3">
    <div className="card mx-auto">
      <div className="img-container ">
        <img alt={props.name} src={props.image} className="img-fluid img-thumbnail" onClick={props.handleIncrement}/>
      </div>
    </div>
  </div>
);


export default MustangCard;