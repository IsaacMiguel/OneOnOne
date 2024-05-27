import React from "react"
import styled from "styled-components"

const TextField = styled.input`
  width: 100%;
  min-width: 5rem;
  height: 2rem;
  border-radius: 5px;
`

/**
 * @returns {import("react").ReactElement}
 */
export function Text() {
  return <TextField type="text" />
}
