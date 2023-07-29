export default function Humidity (props: any) {
    const { humidity } = props 


    return (
        <div className="humidity">
            <div className="content">
                <h3>Humitat</h3>
                <p>
                    {humidity}%
                </p>
            </div>
        </div>
    )
}