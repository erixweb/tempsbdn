import { API_ENDPOINT } from "../declarations"
import useWeater from "../hooks/useWeather"

export default function ECMWFPrediction(_props: any) {
	const [weather, fetchWeather] = useWeater(API_ENDPOINT)

	console.log(weather)
	return <h1>hello</h1>
}
