import React, { useState } from 'react'

const Demo = () => {
  const [std, setStd] = useState(['chirag', 'jignesh', 'jatin', 'jay'])

  const addValue = (e) => {
    setStd((oldStd) => [...oldStd, e.target.value])
  }
  // const increement = () => {
  //     if (count < 20) {
  //         setC(count + 1)
  //     }

  // }
  // const decrement = () => {
  //     if (count > 0) {
  //         setC(count - 1)
  //     }

  // }
  return (
    <>
      {/* <h1>{count}</h1>
        <button onClick={() => {
            increement()
        }}>Increement</button >
        <button onClick={() => {
            decrement()
        }}>Decreement</button> */}
      <input
        type="text"
        onBlur={(event) => {
          addValue(event)
        }}
      />
      {std.map((result) => {
        return <h1>{result}</h1>
      })}
    </>
  )
}

export default Demo
