import React from "react"

import styled from "styled-components"

const SHeader = styled.header`
  width: 100dvw;
  background: ${(props) => props.theme.colors.primary};
`

/**
 * Header
 */
export const Header = () => {
  return (
    <SHeader role="header">
      <h1>Header</h1>
    </SHeader>
  )
}
