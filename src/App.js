import React from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* Main container for TodoList */}
        
        {/* Routing for About section */}
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
