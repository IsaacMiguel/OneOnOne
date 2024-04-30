import React from "react"
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Home, } from "../Pages/Home"
import { Private, } from "../Pages/Private"
import { PrivateRouteGuard, } from "./privateRouteGuard"

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route element={<PrivateRouteGuard />}>
          <Route path="private" element={<Private />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
