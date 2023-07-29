export default function Humidity (props: any) {
    const { humidity } = props 


    return (
        <div className="humidity container">
            <div className="content">
                <h3>Humitat</h3>
                <p>
                    {humidity}%
                </p>
            </div>
        </div>
    )
}