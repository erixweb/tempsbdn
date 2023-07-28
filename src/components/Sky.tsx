import wmocodes from "../wmocodes"

interface SkyProps {
	wmocode: number
}

export default function Sky(props: SkyProps) {
	const { wmocode } = props

	const wmo: any = wmocodes()

	const image = wmo[wmocode].day

	return (
		<div className="sky">
			<img src={image.image} alt={image.description} />
            <p>
                {image.description}
            </p>
		</div>
	)
}
