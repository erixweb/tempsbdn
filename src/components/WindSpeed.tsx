export default function WindSpeed (props: any) {
    const { wind } = props 

    return (
        <div className="windspeed container">
            <div className="content">
                <h3>Vent</h3>
                <p>
                    {wind} km/h
                </p>
            </div>
        </div>
    )
}