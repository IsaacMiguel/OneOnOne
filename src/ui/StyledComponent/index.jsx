import { ThemeProvider } from 'styled-components'
import * as constants from './constants'

/**
 * @typedef StyledComponent
 * @type {HTMLElement} 
 * @property {ChildNode} children - an html element
 */
export const StyledComponent = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...constants }}>
      {children}
    </ThemeProvider >
  )
}