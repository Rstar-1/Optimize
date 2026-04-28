import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

// 🎨 Global styles
import "./assets/scss/structure.scss"
import "./assets/scss/theme.scss"
import "./assets/scss/global.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)