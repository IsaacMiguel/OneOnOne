import React from "react"
import { BrowserRouter, Routes, Route, } from "react-router-dom"

// Components
import { PrivateRouteGuard, } from "./privateRouteGuard"

// Pages
import { Home, } from "../Pages/Home"
import { Private, } from "../Pages/Private"
import { User, } from "../Pages/User"

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route element={<PrivateRouteGuard />}>
          <Route path="private" element={<Private />} />
        </Route>
        <Route element={<PrivateRouteGuard />}>
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
