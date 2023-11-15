import { useEffect, useState } from "preact/hooks"
import { APIResults } from "../components/types"
export type Weather = {
    weather: APIResults | undefined
    fetchWeather: () => Promise<void>
}
export default function useWeater(endpoint: string): any {
	const [weather, setWeather] = useState<APIResults|any>()
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
