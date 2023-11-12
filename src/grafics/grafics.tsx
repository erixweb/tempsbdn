import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { useEffect, useState } from "preact/hooks"
import { APIResults } from "../components/types"
import { API_ENDPOINT, LONG_PREDICTION } from "../declarations"

export default function Graphics(_props: any) {
	const [weather, setWeather] = useState<APIResults | null>()
	const [options, setOptions] = useState<any>()
	const [apiEndpoint, setAPIEndpoint] = useState<string>(API_ENDPOINT)
	const [endpointName, setEndpointName] = useState<string>("short")

	const fetchAPI = async (endpoint: string) => {
		return await fetch(endpoint)
			.then(res => res.json())
			.then(data => {
				setWeather(data)
			})
	}
	const changeEndpoint = () => {
		if (endpointName === "short") {
			setEndpointName("long")
			setAPIEndpoint(LONG_PREDICTION)
		} else {
			setEndpointName("short")
			setAPIEndpoint(API_ENDPOINT)
		}
	}
	useEffect(() => {
		fetchAPI(apiEndpoint)
	}, [apiEndpoint])
	useEffect(() => {
		setOptions({
            
			chart: {
				type: "spline",
                zooming: {
                    type: "x",
                    mouseWheel: true
                },
			},
			title: {
				text: `Temperatura próximes ${endpointName === "short" ? 72 : 168} hores`,
			},
			yAxis: {
				title: {
					text: "Valor",
				},
			},
			xAxis: {
				title: {
					text: "Hores",
				},
			},
			series: [
				{
					name: "Temperatura (ºC)",
					data: weather?.hourly.temperature_2m,
				},
				{
					name: "Humitat (%)",
					data: weather?.hourly.relativehumidity_2m,
				},
				{
					name: "Precipitació (mm)",
					data: weather?.hourly.precipitation,
				},
				{
					name: "Velocitat del vent (km/h)",
					data: weather?.hourly.windspeed_10m,
				},
			],
		})
	}, [weather])
	return (
		<main class="w-full max-w-[50em] p-[16px]">
			<h2 class="text-[25px] font-bold text-center p-[20px]">Gràfiques del temps</h2>
			<section>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
				/>
				<button class="px-[10px] py-[4px] bg-slate-300 mt-[10px] rounded-full" onClick={changeEndpoint}>
					Predicció per les próximes 168h
				</button>
			</section>
		</main>
	)
}
