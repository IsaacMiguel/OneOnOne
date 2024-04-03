import React from "react"

import { Header } from "./Header.jsx"

const ariaFooter = "footer"

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
      <footer role={ariaFooter}>
        <h1>footer</h1>
      </footer>
    </>
  )
}
