import React from "react"
import styled from "styled-components"

const SectionContainer = styled.section`
  padding: 1rem;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;

  details[open] summary:after {
    content: "-";
  }
`

const Heading = styled.summary`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;

  &:after {
    content: "+";
  }
`

/**
 * @property {String} sectionName
 * @property {import("react").ReactElement} children
 * @returns {import("react").ReactElement}
 */
export default function Section({ children, sectionName, },) {
  return (
    <SectionContainer>
      <details>
        <Heading>
          <span>
            {sectionName}
          </span>
        </Heading>
        { children }
      </details>
    </SectionContainer>
  )
}
