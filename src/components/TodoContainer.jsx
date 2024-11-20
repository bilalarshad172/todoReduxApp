import React from 'react'
import TodoContent from './TodoContent'

const TodoContainer = () => {
  return (
      <div className='w-3/5 border rounded mt-5'>
          <h2 className='text-xl font-semibold'>Todo List</h2>
          <TodoContent/>
      </div>
  )
}

export default TodoContainer