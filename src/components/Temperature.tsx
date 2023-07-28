interface TemperatureProps {
    temperature: number
}

export default function Temperature (props: TemperatureProps) {
    const { temperature } = props

    return (
        <div className="temperature">
            <h2>
                {temperature}ºC
            </h2>
        </div>
    )
}