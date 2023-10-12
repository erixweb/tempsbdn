import { useEffect, useState } from "preact/hooks"
import { APIResults } from "../components/types"
import { API_ENDPOINT } from "../declarations"
import Sky from "../components/Sky"
import { IconThermometer, IconUmbrella } from "@tabler/icons-preact"

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
		const currentDate = new Date()

		for (let i = 0; i < weather.hourly.time.length; i++) {
			if (new Date(weather.hourly.time[i]) <= currentDate) continue

			weatherlocal.push({
				hour: weather.hourly.time[i],
				temperature: weather.hourly.temperature_2m[i],
				apparent_temperature: weather.hourly.apparent_temperature[i],
				humidity: weather.hourly.relativehumidity_2m[i],
				precipitation_probability: weather.hourly.precipitation_probability[i],
				weathercode: weather.hourly.weathercode[i],
				isday: 1,
			})
		}

		setHourlyWeather(weatherlocal)
	}, [weather])

	return (
		<main class="w-full max-w-[50em] p-[16px]">
			<h2>Predicció de les próximes hores i dies</h2>
			<section class="grid grid-cols-3 items-center gap-[20px]">
				{hourlyWeather?.map((info: any) => (
					<div class="w-full bg-slate-200 p-[12px] rounded-[10px] text-start flex flex-col gap-[10px]">
						<div>{new Date(info.hour).getHours() + ":00"}</div>
						<Sky wmocode={info.weathercode} time={info.isday} />
						<div class="inline-flex gap-[10px]"><IconThermometer /> {info.temperature} ºC</div>
						<div class="inline-flex gap-[10px]"><IconUmbrella /> {info.precipitation_probability}%</div>
					</div>
				))}
			</section>
		</main>
	)
}
