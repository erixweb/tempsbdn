import { useEffect, useState } from "preact/hooks"
import Sky from "./Sky"
import { APIResults } from "./types"
import Temperature from "./Temperature"
import WindSpeed from "./WindSpeed"
import Humidity from "./Humidity"
import PrecipitationProb from "./PrecipitationProb"
import ThermalSensation from "./ThermalSensation"
import { API_ENDPOINT } from "../declarations"

export default function Card() {
	const [weather, setWeather] = useState<APIResults | null>(null)

	const badalonatime = new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" })
	const formatDate = new Date(badalonatime)
	const currentHour = formatDate.getHours()

	useEffect(() => {
		const fetchAPI = async () => {
			return await fetch(API_ENDPOINT)
				.then(res => res.json())
				.then(data => {
					setWeather(data)
				})
		}

		fetchAPI()
	}, [])
	return (
		<section id="avui" class="today card">
			<nav>
				<h2>Temps a Badalona</h2>
			</nav>
			{weather ? (
				<Sky
					wmocode={weather.current_weather.weathercode}
					time={weather.current_weather.is_day}
				/>
			) : ""}
			{weather ? <Temperature temperature={weather.current_weather.temperature} /> : ""}
			<div className="info">
				{weather ? <WindSpeed wind={weather.current_weather.windspeed} /> : ""}
				{weather ? <Humidity humidity={weather.hourly.relativehumidity_2m[currentHour]} /> : ""}
				{weather ? <PrecipitationProb probability={weather.hourly.precipitation_probability[currentHour]} /> : ""}
				{weather ? <ThermalSensation degrees={weather.hourly.apparent_temperature[currentHour]} /> : ""}
			</div>
		</section>
	)
}
