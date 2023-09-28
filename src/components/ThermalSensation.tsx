import { IconThermometer } from "@tabler/icons-preact"

export default function ThermalSensation (props: any) {
    const { degrees } = props

    return (
        <div className="humidity container">
            <div className="content">
                <h3 class="inline-flex gap-[20px]">
                    Sensació tèrmica
                    <IconThermometer />
                </h3>
                <p>
                    {degrees}ºC
                </p>
            </div>
        </div>
    )
}