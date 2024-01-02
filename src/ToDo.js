import React, { useState, useRef } from 'react'

const ToDo = () => {
  const input = useRef(null)
  const [todo, setTodo] = useState([])
  const [updateIndex, setIndex] = useState(null)

  const addData = () => {
    var inp = input.current.value
    if (inp !== '') {
      if (updateIndex == null) {
        console.log(inp)
        setTodo((old) => [...old, inp])
      } else {
        alert(updateIndex)
        let data = [...todo]
        data[updateIndex] = inp
        setTodo(data)
        setIndex(null)
      }
      input.current.value = ''
    } else {
      alert('please insert data')
    }
  }

  const deleteData = (i) => {
    console.log(i)

    let data = todo.filter((re, index) => {
      return i != index
    })

    setTodo(data)
  }

  const editData = (res, index) => {
    input.current.value = res
    input.current.focus()
    setIndex(index)
  }
  return (
    <>
      <input type="text" id="input" ref={input} />
      <button
        onClick={() => {
          addData()
        }}
      >
        Add Data
      </button>
      {todo.map((result, i) => {
        return (
          <>
            <h1>{result}</h1>
            <button
              onClick={() => {
                deleteData(i)
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                editData(result, i)
              }}
            >
              Update
            </button>
          </>
        )
      })}
    </>
  )
}

export default ToDo
