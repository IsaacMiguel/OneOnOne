import React, { createContext, useState, } from "react"

/**
 * @type {GContext}
 */
const defaultGContext = {
  globalData: {
    isLogged: false,
  },
  setIsLogged: () => { },
}

/**
 * @type {import("react").Context<GContext>}
 * @property {HTMLElement} children
 */
export const GlobalContext = createContext(defaultGContext,)

/**
 * @typedef GlobalContext
 * @type {HTMLElement}
 * @property {HTMLElement} children
 */
export const GlobalProvider = ({ children, },) => {
  const [globalData, setData,] = useState(defaultGContext.globalData,)

  /**
   * @type {setIsLogged}
   */
  const setIsLogged = (isLogged,) => setData({ isLogged, },)

  return (
    <GlobalContext.Provider value={{
      setIsLogged,
      globalData,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
