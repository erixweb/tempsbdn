import { IconRipple } from "@tabler/icons-preact"

export default function Humidity(props: any) {
	const { humidity } = props

	return (
		<div className="inline-flex humidity container">
			<div className="w-full content">
				<h3 class="inline-flex gap-[20px] text-start">
                    Humitat
			        <IconRipple />
                </h3>
				<p>{humidity}%</p>
			</div>
		</div>
	)
}
