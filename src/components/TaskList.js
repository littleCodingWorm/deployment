import './../TaskList.css';
import axios from 'axios';
const { Component } = require('react');

// axios get first cuz it's easier to test

const Task = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.completed} />
      <label> {props.name} </label>
    </li>
  );
};

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };

    this.todoList = this.todoList.bind(this);
  }

  // component did mount
  componentDidMount() {
    axios
      .get('http://localhost:4000/')
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch((error) => console.log(`${error}`));
  }

  todoList() {
    return this.state.tasks.map((task) => {
      //take props
      return (
        <Task key={task._id} name={task.task} completed={task.completed} />
      );
    });
  }

  render() {
    return (
      // state is they key
      <ul>{this.todoList()}</ul>
    );
  }
}
