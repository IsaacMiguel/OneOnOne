import React from "react"
import styled from "styled-components"
import { Field, } from "formik"

const TextField = styled(Field,)`
  width: 100%;
  min-width: 5rem;
  height: 2rem;
  border-radius: 5px;
`

/**
 * @param {Object} settings
 * @param {String} settings.name
 * @returns {import("react").ReactElement}
 */
export function Text({ name, },) {
  return <TextField type="text" name={name} />
}
