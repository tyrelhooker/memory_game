import React from "react";

const MustangCard = props => (
  <div className="card col-3 mx-auto">
    <div className="img-container ">
      <img alt={props.name} src={props.image} class="img-fluid"/>
    </div>
  </div>
);


export default MustangCard;