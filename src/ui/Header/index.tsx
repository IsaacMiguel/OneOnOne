import React from "react"

import styled from "styled-components"

import oneOnOneLogo from "../../../public/oneonone.svg"

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  background-color: #26671e;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #04aa6d;
  }
`

/**
 * @typedef Header
 * @type {HTMLElement}
 */
export const Header = () => {
  return (
    <SHeader>
      <ul>
        <li>
          <a href="/user">User</a>
        </li>
        <li>
          <a href="#meeting">Meeting</a>
        </li>
        <li>
          <a href="#followup">Follow Up</a>
        </li>
        <li>
          <a href="#actions">Actions</a>
        </li>
      </ul>
      <img src={oneOnOneLogo} alt="navbar-one-on-one-logo" />
    </SHeader>
  )
}
