import React, { useContext, } from "react"

import { Header, } from "./Header.jsx"
import styled from "styled-components"
import { GlobalStore, } from "../../stores/index.jsx"

const Container = styled.div`
  display: grid;
`

/**
 * @typedef Layout
 * @type {HTMLElement}
 * @property {HTMLElement} children
 */
export const Layout = ({ children, },) => {
  const global = useContext(GlobalStore.GlobalContext,)

  const handleOnClick = () => global.setIsLogged(!global.globalData.isLogged,)

  return (
    <Container>
      <Header title={"Header Title"} />
      <main role="main">
        {JSON.stringify(global, null, 2,)}<button onClick={handleOnClick}>Loged</button>
        {children}
      </main>
      <footer>
        <h1>footer</h1>
      </footer>
    </Container>
  )
}
