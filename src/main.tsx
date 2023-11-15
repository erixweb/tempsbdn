import { render } from "preact"
import { Router } from "preact-router"
import "./tailwind.css"

import App from "./App"
import PrediccioPage from "./prediccio/prediccio"
import NotFound from "./404"
import Graphics from "./grafics/grafics"
import ECMWFPrediction from "./prediccio/ecmwf"

render(
	<Router>
		<App path="/" />
		<PrediccioPage path="/prediccio" />
		<Graphics path="/grafics" />
		<ECMWFPrediction path="/ecmwf" />


		<NotFound default />
	</Router>,
	document.getElementById("app")!
)
