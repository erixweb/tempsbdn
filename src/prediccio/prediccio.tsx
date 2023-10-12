import { useEffect, useState } from "preact/hooks"
import { APIResults } from "../components/types"
import { API_ENDPOINT } from "../declarations"
import Sky from "../components/Sky"

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

		let hour = 0
		for (let i = 0; i < weather.hourly.time.length; i++) {
			if (new Date(weather.hourly.time[i]) <= currentDate) continue

			weatherlocal.push({
				hour: weather.hourly.time[i],
				temperature: weather.hourly.temperature_2m[i],
				apparent_temperature: weather.hourly.apparent_temperature[i],
				humidity: weather.hourly.relativehumidity_2m[i],
				precipitation_probability: weather.hourly.precipitation_probability[i],
				weathercode: weather.hourly.weathercode[i],
				isday: 1
			})
		}

		setHourlyWeather(weatherlocal)
	}, [weather])

	return (
		<main class="w-full max-w-[50em] p-[16px]">
			<h2>Predicció de les próximes hores i dies</h2>
			<g><path stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd" stroke="#3fb8e8" stroke-opacity="0" stroke-width="3" fill="#3fb8e8"
			fill-opacity="0" class="leaflet-clickable" d="M1250 65L1247 64L1247 67L1244 71L1244 73L1246 73L1250 77L1237 81L1240 84L1246 84L1248 89L1246 93L1247 95L1242 96L1238 94L1236 96L1236 100L1234 100L1234 103L1227 101L1226 96L1221 96L1219 100L1217 99L1216 95L1214 95L1213 97L1211 90L1210 91L1205 89L1208 87L1210 88L1210 86L1208 86L1208 81L1210 79L1209 77L1211 73L1213 72L1211 68L1210 67L1208 69L1207 66L1208 67L1213 62L1214 58L1217 61L1220 60L1225 64L1229 62L1232 64L1232 66L1232 63L1236 65L1236 61L1240 57L1242 57L1243 63L1245 63L1245 57L1249 58L1248 60L1250 64zM1248 60L1248 61zM1220 66L1219 67L1221 66z"></path></g>
			<section class="grid grid-cols-4 items-center gap-[20px]">
				{hourlyWeather?.map((info: any) => (
					<div class="w-full bg-slate-200 p-[12px] rounded-[10px]">
						<div>{new Date(info.hour).getHours() + ":00"}</div>
						<Sky
							wmocode={info.weathercode}
							time={info.isday}
						/>
						<div>{info.temperature} ºC</div>
						<div>{info.precipitation_probability}%</div>
					</div>
				))}
			</section>
		</main>
	)
}
