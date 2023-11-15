import { useEffect, useState } from "preact/hooks"
import { ECMWF_ENDPOINT } from "../declarations"
import useWeater from "../hooks/useWeather"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

export default function ECMWFPrediction(_props: any) {
	const [weather, fetchWeather] = useWeater(ECMWF_ENDPOINT)
	const [options, setOptions] = useState<any>()

    useEffect(() => {
		setOptions({
			chart: {
				type: "line",
                zooming: {
                    type: "x",
                    mouseWheel: true
                },
			},
			title: {
				text: `Temperatura próximes 80 hores`,
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
					name: "Sensació tèrmica (ºC)",
					data: weather?.hourly.apparent_temperature,
				},
				{
					name: "Humitat (%)",
					data: weather?.hourly.relative_humidity_2m,
				},
				{
					name: "Precipitació (mm)",
					data: weather?.hourly.precipitation,
				},
				{
					name: "Velocitat del vent (km/h)",
					data: weather?.hourly.wind_speed_10m,
				},
			],
		})
	}, [weather])
	return (
        <main class="w-full max-w-[50em] p-[16px]">
			<h2 class="text-[25px] font-bold text-center p-[20px]">Gràfiques del temps (Model ECMWF)</h2>
			<section>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
				/>
			</section>
            <section>
                <p>
                    ECMWF és el model meteorològic Europeu per predicciones de mitg termini
                </p>
            </section>
		</main>
    )
}
