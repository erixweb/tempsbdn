import { render } from "preact"
import { Router } from "preact-router"
import "./tailwind.css"

import App from "./App"
import PrediccioPage from "./prediccio/prediccio"
render(<Router>
    <App path="/" />
    <PrediccioPage path="/prediccio" />
</Router>, document.getElementById("app")!)
