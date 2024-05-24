import React from "react"

/**
 * @typedef Layout
 * @type {HTMLElement}
 * @property {HTMLElement} children
 */
export function Main({ children, },) {
  return (
    <main role="main">{children}</main>
  )
}
