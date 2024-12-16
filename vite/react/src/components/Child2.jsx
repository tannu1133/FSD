import React from 'react'

const Child2 = ({user}) => {
  return (
    <div id="container">
        <h2>{user.name}'s Profile Web</h2>
        <p>Id:{user.Id}</p>
        <p>Hobbies: {user.hobbies.join(",")}</p>
        <p>{user.isMember?"Member":"Not a member"}</p>
    </div>
  )
}

export default Child2