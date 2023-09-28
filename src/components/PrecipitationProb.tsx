import { IconUmbrella } from "@tabler/icons-preact"

// Probability

export default function PrecipitationProb(props: any) {
    const { probability } = props

	return (
		<div className="precipitation-prob container">
			<div className="content w-full">
				<h3 class="inline-flex gap-[10px]">
					Prob. de precipitació
					<IconUmbrella />
				</h3>
				<p>{probability}%</p>
			</div>
		</div>
	)
}
