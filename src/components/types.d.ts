export type APIResults = {
	latitude: number
	longitude: number
	generationtime_ms: number
	utc_offset_seconds: number
	timezone: string
	timezone_abbreviation: string
	elevation: number
	current_weather: CurrentWeather
	hourly_units: HourlyUnits
	hourly: Hourly
}

export type CurrentWeather = {
	temperature: number
	windspeed: number
	winddirection: number
	weathercode: number
	is_day: number
	time: string
}

export type Hourly = {
	time: string[]
	temperature_2m: number[]
	relativehumidity_2m: number[]
	apparent_temperature: number[]
	precipitation_probability: number[]
	precipitation: number[]
	weathercode: number[]
	windspeed_10m: number[]
}

export type HourlyUnits = {
	time: string
	temperature_2m: string
	relativehumidity_2m: string
	apparent_temperature: string
	precipitation_probability: string
	precipitation: string
	weathercode: string
	windspeed_10m: string
}
