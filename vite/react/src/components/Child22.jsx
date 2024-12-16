import React from 'react'
import Child3 from './Child3'

function Child22({studentData}) {
  return (
    <div> 
      <h1>Child22</h1>
      <Child3 studentData={studentData}/>
    </div>
  )
}

export default Child22