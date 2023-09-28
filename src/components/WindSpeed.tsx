import { IconWind } from "@tabler/icons-preact"

export default function WindSpeed (props: any) {
    const { wind } = props 

    return (
        <div className="windspeed container">
            <div className="content">
                <h3 class="inline-flex gap-[20px]">
                    Vent
                    <IconWind />
                </h3>
                <p>
                    {wind} km/h
                </p>
            </div>
        </div>
    )
}