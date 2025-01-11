import React from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
       <Header/>
       <div className="container">
        <TodoList/>
       </div>
       
    </div>
  )
}

export default App
