import React from "react"

import { users, } from "./data"
import { Layout, } from "./ui/layout/layout"
import { GlobalStore, } from "./stores"

function App() {
  return (
    <GlobalStore.GlobalProvider>
      <Layout>
        <h1>hi!</h1>
        {users.map((u,) => (
          <p key={u.id}>
            name: {u.name}, age: {u.age}
          </p>
        ),)}
      </Layout>
    </GlobalStore.GlobalProvider>
  )
}

export default App
