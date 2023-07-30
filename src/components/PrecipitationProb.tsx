// Probability

export default function PrecipitationProb(props: any) {
    const { probability } = props

	return (
		<div className="precipitation-prob container">
			<div className="content">
				<h3>Probabilitat de precipitació</h3>
				<p>{probability}%</p>
			</div>
		</div>
	)
}
