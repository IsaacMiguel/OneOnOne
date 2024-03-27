import React from "react"

import { Header } from "./Header.jsx"

/**
 * @typedef Layout
 * @type {HTMLElement}
 * @property {HTMLElement} children
 */
export const Layout = ({ children }) => {
  return (
    <>
      <Header title={"Header Title"} />
      <main role="main">{children}</main>
      <footer role="footer">
        <h1>footer</h1>
      </footer>
    </>
  )
}
