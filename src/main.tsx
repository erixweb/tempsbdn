import { render } from "preact"
import { Router } from "preact-router"
import "./tailwind.css"
import { lazy } from "preact/compat"
import { Suspense } from "preact/compat"

import NotFound from "./404"
import Loading from "./components/loading"
const App = lazy(() => import("./App"))
const ECMWFPrediction = lazy(() => import("./prediccio/ecmwf"))
const Graphics = lazy(() => import("./grafics/grafics"))
const PrediccioPage = lazy(() => import("./prediccio/prediccio"))

render(
	<Suspense fallback={<Loading/>}>
		<Router>
			<App path="/" />
			<PrediccioPage path="/prediccio" />
			<Graphics path="/grafics" />
			<ECMWFPrediction path="/ecmwf" />
			<NotFound default />
		</Router>
	</Suspense>,
	document.getElementById("app")!
)
