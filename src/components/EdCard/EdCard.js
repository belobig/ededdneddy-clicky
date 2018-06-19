import React from "react";
import "./EdCard.css";

// const EdCard = props => (
/*   <div className="card">
    <div className="img-container">

    <a onClick={() => props.selectEd(props.name)} 
    className={props.playerScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
>
    <img alt={props.name} src={props.image} />
</a>
</div>
</div>
); */


const EdCard = props => (
	<div onClick={() => props.selectEds(props.ed)} className="card">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default EdCard;