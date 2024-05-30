import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  width: 100%;
  min-width: 5rem;
  height: 2rem;
  border-radius: 5px;
`

const Loader = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1.5s linear infinite;

  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 3px solid;
    border-color: #ff3d00 transparent;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

/**
 * @param {Object} config
 * @param {String} config.label
 * @param {Boolean} [config.isLoading]
 * @param {("button" | "submit" | "reset" | undefined)} [config.type]
 * @returns {import("react").ReactElement}
 */
export function Button({ label, isLoading = false, type = "button", },) {
  return (
    <Btn disabled={isLoading} type={type}>
      {isLoading ? <Loader className="loader" /> : label}
    </Btn>
  )
}
