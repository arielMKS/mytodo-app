import React, {Component} from 'react'
import {render} from 'react-dom'
import TodoList from './components/TodoList'
import '../public/style.css'

class ClientApp extends Component {
  render () {
    return (
      <div className="container">
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
    )
  }
}

render(<ClientApp />, document.getElementById('app'))
