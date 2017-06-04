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
            isComplete: false,
            isEditing: false
          },
          {
            task: "Feed Dog",
            isComplete: false,
            isEditing: false
          },
          {
            task: "Clean Garage",
            isComplete: false,
            isEditing: false
          }
        ]
      }
  }

  deleteTask (taskToDelete) {
    _.remove(this.state.todos, todo => todo.task == taskToDelete);
    this.setState({todos: this.state.todos})
  }

  saveNewTask (oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask )
    foundTodo.task = newTask;
    foundTodo.isEditing = false; // reset isEditing, no longer in editing mode
    this.setState({todos: this.state.todos})
  }

  handleIsEditingChange (val) {
    console.log("inside todolist")
    const foundTodo = _.find(this.state.todos, todo => todo.task === val.task)
    foundTodo.isEditing = !foundTodo.isEditing;
    this.setState({
      todos: this.state.todos
    })
  }

  createTodo (event) {
    event.preventDefault();
    const userInput = this.refs.createInput.value

    var validation = this.validateInput(userInput)
    if (validation) {
      this.state.todos.push({
        task: userInput,
        isComplete: true,
        isEditing: false
      })
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

  listTodos () {
    return this.state.todos.map( (todo, i) =>
     <TodoListItem key={i} {...todo}
       handleIsEditingChange={this.handleIsEditingChange.bind(this)}
       saveNewTask={this.saveNewTask.bind(this)}
       deleteTask={this.deleteTask.bind(this)}
      />
   )
  }

  render () {
    return (
      <div>
        <h1>My Todo App</h1>

        <form onSubmit={this.createTodo.bind(this)}>
          <input type="text" placeholder="Enter a task" ref="createInput"  />
          <button type="submit">Create</button>
        </form>
<table>
  <tbody>
    <tr>
      <th>Task</th>
      <th>Action</th>
    </tr>
        {this.listTodos()}
 </tbody>
</table>
     </div>
    )
  }
}
