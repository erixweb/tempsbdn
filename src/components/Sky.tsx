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
		<section className="sky p-[16px]">
			<div class="py-[16px]">
				<img src={image.image} alt={image.description} class="w-[80px] h-[80px]" />
			</div>
			<p class="text-center">{image.description}</p>
		</section>
	)
}
