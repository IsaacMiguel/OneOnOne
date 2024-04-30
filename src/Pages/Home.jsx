import React from "react"

import { users, } from "./../data"

export const Home = () => {
  return (
    <>
      <h1>hi!</h1>
      {users.map((u,) => (
        <p key={u.id}>
          name: {u.name}, age: {u.age}
        </p>
      ),)}
    </>
  )
}
