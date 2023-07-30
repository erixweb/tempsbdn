export default function ThermalSensation (props: any) {
    const { degrees } = props

    return (
        <div className="humidity container">
            <div className="content">
                <h3>Sensació tèrmica</h3>
                <p>
                    {degrees}ºC
                </p>
            </div>
        </div>
    )
}