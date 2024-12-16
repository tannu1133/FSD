import React from 'react'

function Child3({studentData}) {
  return (
    <div><h1>Child3</h1>
    <p>Name:{studentData.name}</p>
    <p>Roll:{studentData.roll}</p>
    </div>

  )
}

export default Child3