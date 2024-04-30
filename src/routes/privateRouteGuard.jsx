import React, { useContext, } from "react"
import { Navigate, Outlet, } from "react-router-dom"
import { GlobalContext, } from "../stores/global"

export const PrivateRouteGuard = () => {
  const globalData = useContext(GlobalContext,)

  if (!globalData.globalData.isLogged) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
