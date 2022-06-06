import { buildQueries } from '@testing-library/react';
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Ketan', age: 21},
      {name: 'Aarj', age: 0},
      {name: 'Aarthi', age: 10}
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked!')
    // DO NOT DO THIS: this.state.persons[0].name = 'Ketan Pawar';
    this.setState ( {
        persons: [
          {name: 'Ketan Pawar', age: 21},
          {name: 'Aarj', age: 0},
          {name: 'Aarthi', age: 11}
        ]
      }
    )
  }

  newChangeHandler = (event) => {
    this.setState ( {
        persons: [
          {name: 'Ketan Pawar', age: 21},
          {name: event.target.value, age: 0},
          {name: 'Aarthi', age: 11}
        ]
      }
    )
  }

  render() {

    const style = {
      // Inline styling for button
      width: '10%',
      height: '12%',
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '1px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi There, Happy React Learning!!</h1>
        <button
          style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} 
          click = {this.switchNameHandler} >Learning React </Person>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          changed = {this.newChangeHandler}/>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className:App}, React.createElement('h1', 'null', "Hello, I'am Happy to Learn React!"))
    }
  }

export default App;




// For running this use terminal 
// write folder name -> cd React-Complete-Guide
// run command -> npm start