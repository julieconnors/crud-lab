import React, { Component } from 'react';
class ReviewInput extends Component {

  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    debugger
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
