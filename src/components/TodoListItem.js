import React, {Component} from 'react'

export default class TodoListItem extends Component {
  constructor(props) {
    super()
  }

  render () {
    console.log("The props", this.props)
    return (
      <div>
        {this.props.task}
      </div>
    )
  }
}
