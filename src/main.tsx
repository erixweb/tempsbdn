import { render } from "preact"
import { Router } from "preact-router"
import "./tailwind.css"

import App from "./App"
import PrediccioPage from "./prediccio/prediccio"
import NotFound from "./404"

render(
	<Router>
		<App path="/" />
		<PrediccioPage path="/prediccio" />
		<NotFound default />
	</Router>,
	document.getElementById("app")!
)
