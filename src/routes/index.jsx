import React from "react"
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Home, } from "../Pages/Home"
import { Private, } from "../Pages/Private"

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/private" Component={Private} />
      </Routes>
    </BrowserRouter>
  )
}
