import React from "react"
import styled from "styled-components"

import { Header, } from "./../Header"
import { Main, } from "../Main"

const Container = styled.div`
  main {
    padding: 2rem 0rem;
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
      <Main>{children}</Main>
    </Container>
  )
}
