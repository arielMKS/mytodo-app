import React, {Component} from 'react'
import {render} from 'react-dom'
import TodoList from './components/TodoList'

class ClientApp extends Component {
  render () {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

render(<ClientApp />, document.getElementById('app'))
