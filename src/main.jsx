import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { StyledComponent } from "./ui/StyledComponent"

import "./main.css"

if (process.env.NODE_ENV !== "production") {
  // Not For Production
  import("@axe-core/react").then((axe) => {
    axe.default(React, ReactDOM, 1000)
    // @ts-ignore for document.getElementById('root')
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <StyledComponent>
          <App />
        </StyledComponent>
      </React.StrictMode>
    )
  })
} else {
  // For Production
  // @ts-ignore for document.getElementById('root')
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <StyledComponent>
        <App />
      </StyledComponent>
    </React.StrictMode>
  )
}
