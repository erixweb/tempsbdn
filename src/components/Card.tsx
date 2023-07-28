import { useEffect, useState } from "preact/hooks"
import Sky from "./Sky"
import { APIResults } from "./types"
import Temperature from "./Temperature"
const API_ENDPOINT =
	"https://api.open-meteo.com/v1/forecast?latitude=41.45&longitude=2.2474&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,windspeed_10m&forecast_days=3&current_weather=true"


export default function Card() {
	const [weather, setWeather] = useState<APIResults | null>(null)

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
			{weather ? <Sky wmocode={weather.current_weather.weathercode} /> : ""}
			{weather ? <Temperature temperature={weather.current_weather.temperature} /> : ""}
		</section>
	)
}
