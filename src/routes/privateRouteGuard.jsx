import React, { useContext, } from "react"
import { Navigate, } from "react-router-dom"
import { GlobalContext, } from "../stores/global"

/**
 * @typedef PrivateRouteGuard
 * @type {HTMLElement}
 * @property {HTMLElement} children
 */
export const PrivateRouteGuard = ({ children, },) => {
  const globalData = useContext(GlobalContext,)

  if (!globalData.globalData.isLogged) {
    return <Navigate to="/" />
  }

  return children
}
