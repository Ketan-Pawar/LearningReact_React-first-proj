import React from "react";
import './Person.css';
// const Person = function () {

// }
// // or we can write the above code as
// const person = () => {

// }

const person = (props) => {
    return (
        <div className="Person"> 
            <h1 onClick={props.click}>Hi I'am {props.name} and I'am {props.age} years old!</h1>
            <h2>{props.children}</h2>
            <input type="text" onChange={props.changed} />
        </div>

    )
};

export default person;