import React, { createContext, } from "react"
import { create, } from "zustand"
import { persist, createJSONStorage, } from "zustand/middleware"
import { get, set, del, } from "idb-keyval"

/**
 * @type {GContext}
 */
const defaultGContext = {
  globalData: {
    isLogged: true,
  },
  setIsLogged: () => {},
}

/**
 * @type {import("react").Context<GContext>}
 * @property {HTMLElement} children
 */
export const GlobalContext = createContext(defaultGContext,)

// Custom storage object
const storage = {
  getItem: async(name,) => {
    return (await get(name,)) || null
  },
  setItem: async(name, value,) => {
    await set(name, value,)
  },
  removeItem: async(name,) => {
    await del(name,)
  },
}

const useGlobalStore = create(
  persist(
    (set,) => ({
      isLogged: false,
      setIsLogged: (isLogged,) => set(() => ({ isLogged, }),),
    }),
    {
      name: "global",
      storage: createJSONStorage(() => storage,),
    },
  ),
)

/**
 * @typedef GlobalContext
 * @type {HTMLElement}
 * @property {HTMLElement} children
 */
export const GlobalProvider = ({ children, },) => {
  const globalData = useGlobalStore((state,) => state,)
  const settingIsLogged = useGlobalStore((state,) => state.setIsLogged,)

  /**
   * @type {setIsLogged}
   */
  const setIsLogged = (isLogged,) => settingIsLogged(isLogged,)

  return (
    <GlobalContext.Provider
      value={{
        setIsLogged,
        globalData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
