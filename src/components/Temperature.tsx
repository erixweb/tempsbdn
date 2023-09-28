import { IconTemperature } from "@tabler/icons-preact"

interface TemperatureProps {
	temperature: number
}

export default function Temperature(props: TemperatureProps) {
	const { temperature } = props

	return (
		<div class="flex gap-[3px] temperature">
            <IconTemperature />
			<h2>{temperature}ºC</h2>
		</div>
	)
}
