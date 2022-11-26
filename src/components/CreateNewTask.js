import { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      task: this.state.task,
      completed: false,
    };
    axios
      .post('https://git.heroku.com/deployment-todo.git/', newTask)
      .then((response) => console.log(`${response.data}`))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}
