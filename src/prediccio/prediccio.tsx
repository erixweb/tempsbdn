import { useEffect, useRef, useState } from "preact/hooks"
import { APIResults } from "../components/types"
import { API_ENDPOINT, days } from "../declarations"
import Sky from "../components/Sky"
import { IconDropletHalf2, IconThermometer, IconUmbrella } from "@tabler/icons-preact"
import ArrowUp from "../components/arrow-up"
import ArrowDown from "../components/arrow-down"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

export default function PrediccioPage(_props: any) {
	const [weather, setWeather] = useState<APIResults | null>()
	const [hourlyWeather, setHourlyWeather] = useState<any>([])
	const [options, setOptions] = useState<any>()
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
				isday: weather.hourly.is_day[i],
				precipitation: weather.hourly.precipitation[i],
			})
		}

		setHourlyWeather(weatherlocal)
		setOptions({
			chart: {
				type: "spline",
			},
			title: {
				text: "Temperatura próximes 71 hores",
			},
			yAxis: {
				title: {
					text: "Temperatura"
				}
			},
			xAxis: {
				title: {
					text: "Hores"
				}
			},
			series: [
				{
					name: "Temperatura",
					data: weather.hourly.temperature_2m,	
				},
			],
		})
	}, [weather])

	return (
		<main class="w-full max-w-[50em] p-[16px]">
			<h2 class="text-[25px] font-bold text-center p-[20px]">
				Predicció de les próximes hores i dies
			</h2>
			<section class="grid grid-cols-3 items-center gap-[20px] max-md:grid-cols-2 max-sm:grid-cols-1">
				{hourlyWeather?.map((info: any, index: number) => {
					const date = new Date(info.hour)

					return (
						<div class="w-full bg-slate-200 p-[12px] rounded-[10px] text-start flex flex-col gap-[10px]">
							<div>{days[date.getDay()]}</div>
							<div>{date.getHours() + ":00"}</div>
							<Sky wmocode={info.weathercode} time={info.isday} />
							<div class="inline-flex gap-[10px]">
								<IconThermometer /> {info.temperature} ºC
								{hourlyWeather[index - 1]?.temperature < info.temperature ? (
									<ArrowUp />
								) : (
									<ArrowDown />
								)}
							</div>
							<div class="inline-flex gap-[10px]">
								<IconUmbrella /> {info.precipitation_probability}%
							</div>
							<div class="inline-flex gap-[10px]">
								<IconDropletHalf2 /> {info.precipitation}mm
							</div>
						</div>
					)
				})}
			</section>
			<HighchartsReact highcharts={Highcharts} options={options}/>
		</main>
	)
}
