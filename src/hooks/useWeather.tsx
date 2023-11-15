import { useEffect, useState } from "preact/hooks"
import { APIResults } from "../components/types"

export default function useWeater(endpoint: string) {
	const [weather, setWeather] = useState<APIResults>()
    const fetchWeather = async () => {
        await fetch(endpoint)
            .then(res => res.json())
            .then(data => setWeather(data))
    }

	useEffect(() => {
        fetchWeather()
	}, [])
    
    return [weather, fetchWeather]
}
