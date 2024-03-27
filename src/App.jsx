import React from 'react'

import { users } from "./data"
import { Layout } from "./ui/layout/layout"

function App() {
  return (
    <Layout>
      <h1>hi!</h1>
      {users.map((u) => (
        <p key={u.id}>
          name: {u.name}, age: {u.age}
        </p>
      ))}
    </Layout>
  )
}

export default App
