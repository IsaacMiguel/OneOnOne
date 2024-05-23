import React from "react"

import { Header, } from "./../Header"
import styled from "styled-components"

const Container = styled.div`
  main {
    display: block;
    margin: auto;
    max-width: 1800px;
  }
`

/**
 * @typedef Layout
 * @type {HTMLElement}
 * @property {HTMLElement} children
 */
export const Layout = ({ children, },) => {
  return (
    <Container>
      <Header />
      <main role="main">{children}</main>
    </Container>
  )
}
