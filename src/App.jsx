import React from "react"

import { Layout, } from "./ui/layout/layout"
import { GlobalStore, } from "./stores"
import { AppRoutes, } from "./routes"

function App() {
  return (
    <GlobalStore.GlobalProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </GlobalStore.GlobalProvider>
  )
}

export default App
