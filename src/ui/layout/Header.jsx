import React from "react"

import styled from "styled-components"

const SHeader = styled.header`
  width: 100dvw;
  background: ${(props) => props.theme.colors.primary};
`

/**
 * @typedef Header
 * @type {HTMLElement}
 * @property {String} title
 */
export const Header = ({ title }) => {
  return (
    <SHeader role={"header"}>
      <h1>{title}</h1>
    </SHeader>
  )
}
