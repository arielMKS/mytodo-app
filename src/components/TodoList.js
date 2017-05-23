import React, {Component} from 'react'
import TodoListItem from './TodoListItem'
import _ from 'lodash'

export default class TodoList extends Component {
  constructor(props) {
    super()

      this.state = {
        todos: [
          {
            task: "Buy Milk",
            isComplete: true
          },
          {
            task: "Feed Dog",
            isComplete: true
          },
          {
            task: "Clean Garage",
            isComplete: true
          }
        ],
        errorMessage: ""

      }
  }

  updateTodos (event) {
    event.preventDefault();
    const userInput = this.refs.createInput.value
    // console.log("Input is: ", userInput)
    var validation = this.validateInput(userInput)
    if (validation) {
      this.state.todos.push({task: userInput, isComplete: true})
      this.setState({todos: this.state.todos})
    }



    return null;
  }

  validateInput (userInput) {
    if (!userInput) {
      this.setState({errorMessage: "Enter a task"})
      return null;
    } else if (_.find(this.state.todos, todo => todo.task === userInput)) {
      this.setState({errorMessage: "Task already exists"})
      return null;
    }
    return "valid";
  }

  render () {
    return (
      <div>
        <h1>My Todo App</h1>
        <form onSubmit={this.updateTodos.bind(this)}>
          <input type="text" placeholder="Enter a task" ref="createInput"  />
          <button type="submit">Create</button>
        </form>
        {this.state.todos.map( (todo, i) =>
         <TodoListItem key={i} {...todo} />
       )}
     </div>
    )
  }
}
