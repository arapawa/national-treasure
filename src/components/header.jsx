import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    const messages = [
      'Benjamin Franklin invented something like this.',
      'Will someone please explain to me what these magic numbers are?',
      'It\'s invisible.',
      'Where are the letters?',
      'I take it you found the treasure.',
      'There is not a treasure map on the back of the Declaration of Independence.',
      'You\'re treasure hunters, aren\'t you?',
      'I just really thought I was gonna find the treasure.',
      'Did Bigfoot take it?',
      'Does it involve treasure?',
      'It\'s the axiom of treasure hunting.',
      'I\'m not all right! Those men have the Declaration of Independence!',
      'Where\'s the party?'
    ];

    this.state = {
      message: messages[Math.floor(Math.random() * messages.length)]
    };
  }

  render() {
    return (
      <header id="header">
        <div>
          <h5 className="text-danger float-left">INTERNAL USE ONLY</h5>
          <p className="text-right">Do not share this link outside of Aduro.</p>
        </div>
        <img src="images/logo.svg" />
        <h1 className="title">National Treasure</h1>
        <h3>{this.state.message}</h3>
      </header>
    );
  }
}

export default Header;
