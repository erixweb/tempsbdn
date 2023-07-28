import wmocodes from "../wmocodes"

interface SkyProps {
	wmocode: number
    time: number
}

export default function Sky(props: SkyProps) {
	const { wmocode, time } = props


	const wmo: any = wmocodes()

	const image = time === 1 ? wmo[wmocode].day : wmo[wmocode].night

	return (
		<div className="sky">
			<img src={image.image} alt={image.description} />
            <p>
                {image.description}
            </p>
		</div>
	)
}
