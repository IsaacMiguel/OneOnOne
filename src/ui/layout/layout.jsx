import React from "react"

import { Header, } from "./Header.jsx"

/**
 * @typedef Layout
 * @type {HTMLElement}
 * @property {HTMLElement} children
 */
export const Layout = ({ children, },) => {
  return (
    <>
      <Header title={"Header Title"} />
      <section role="main">{children}</section>
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  )
}
