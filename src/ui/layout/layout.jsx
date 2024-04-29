import React from "react"

import { Header, } from "./Header.jsx"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
`

/**
 * @typedef Layout
 * @type {HTMLElement}
 * @property {HTMLElement} children
 */
export const Layout = ({ children, },) => {
  return (
    <Container>
      <Header title={"Header Title"} />
      <main role="main">{children}</main>
      <footer>
        <h1>footer</h1>
      </footer>
    </Container>
  )
}
