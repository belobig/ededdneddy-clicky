import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <ul className="nav nav-bar nav-justified">
            <li><a href="/">Ed, Edd n Eddy Clicky Game |{' '}</a></li>
						
            <li
                className={props.message.indexOf('wrong') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('right') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
               {props.message}
            </li>
            <li>Score: <span style={{color: "blue"}}>{props.playerScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navbar;