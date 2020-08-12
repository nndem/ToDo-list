import React from 'react';
import './App.css';
import TodoList from './Todo/ToDoList'
import Context from './context'
import AddTodo from  './Todo/AddTodo'


const App =() => {
  const [todos, setTodos] = React.useState([
      {id: 1, completed: false, title: 'Купить хлеб'},
      {id: 2, completed: true, title: 'Купить масло'},
      {id: 3, completed: false, title: 'Купить молоко'},
  ])

  const toggleTodo=(id)=>{
      setTodos(
          todos.map(todo => {
          if (todo.id === id){
              todo.completed =!todo.completed
          }
          return todo
      })
      )
  }

  const removeTodo=(id)=>{
      setTodos(todos.filter(todo=>todo.id !==id))
  }

  const addTodo =(title)=>{
      setTodos(todos.concat([{
          title: title,
          id: Date.now(),
          completed: false
      }]))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
    <div className="wrapper">
        <h1> React Tutorial</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ?  <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No todos!</p>}
    </div>
    </Context.Provider>
  );
}

export default App;


