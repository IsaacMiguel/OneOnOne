import React from "react"

import { Header } from "./Header.jsx"

/**
 * Main layout for the app
 */
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main">{children}</main>
      <footer role="footer">
        <h1>footer</h1>
      </footer>
    </>
  )
}
