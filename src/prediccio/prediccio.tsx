import { useEffect, useState } from "preact/hooks"
import { APIResults } from "../components/types"
import { API_ENDPOINT } from "../declarations"

export default function PrediccioPage(_props: any) {
	const [weather, setWeather] = useState<APIResults | null>()
	const [hourlyWeather, setHourlyWeather] = useState<any>([])

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
	useEffect(() => {
		if (!weather) return

		let weatherlocal = []
		for (let i = 0; i < weather.hourly.time.length; i++) {
			weatherlocal.push({
				hour: weather.hourly.time[i],
				temperature: weather.hourly.temperature_2m[i],
				apparent_temperature: weather.hourly.apparent_temperature[i],
				humidity: weather.hourly.relativehumidity_2m[i],
				precipitation_probability: weather.hourly.precipitation_probability[i],
			})
		}

		setHourlyWeather(weatherlocal)
	}, [weather])

	return (
		<main class="w-full max-w-[50em] p-[16px]">
			<h2>Predicció de la temperatura</h2>

			<section class="grid grid-cols-4 items-center gap-[20px]">
				{hourlyWeather?.map((info: any) => (
					<div class="w-full bg-slate-200 p-[12px] rounded-[10px]">
						<div>
							<p>{info.temperature} ºC</p>
						</div>
					</div>
				))}
			</section>
		</main>
	)
}
