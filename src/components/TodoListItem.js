import React, {Component} from 'react'

export default class TodoListItem extends Component {
  constructor (props) {
    super ();
  }

  deleteButtonClick () {
    this.props.deleteTask(this.props.task)
  }

  onSaveClick (event) {
    event.preventDefault()
    const userInput = this.refs.input.value
    this.props.saveNewTask(this.props.task, userInput)
  }

  isEditingToggle () {
    this.props.handleIsEditingChange(this.props);
  }

  showButtons () {
    if (this.props.isEditing) {
      return (
        <div>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.isEditingToggle.bind(this)}>Cancel</button>
        </div>
      )
    } else
    return (
      <div>
        <button onClick={this.isEditingToggle.bind(this)}>Edit</button>
        <button onClick={this.deleteButtonClick.bind(this)}>Delete</button>
      </div>
    )
  }

  showTasks () {
    if (this.props.isEditing) {
      return (
        <form onSubmit={this.onSaveClick.bind(this)}>
          <input type='text' defaultValue={this.props.task} ref="input" />
        </form>
      )
    }
    return (
      <div>{this.props.task}</div>
    )
  }
render () {
  console.log("The props", this.props)
  return (
    <tr>
      <td>{this.showTasks()}</td>
      <td>{this.showButtons()}</td>
    </tr>
  )
}
}

// export default TodoListItem
