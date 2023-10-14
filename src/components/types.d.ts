export type APIResults = {
	latitude: number
	longitude: number
	generationtime_ms: number
	utc_offset_seconds: number
	timezone: string
	timezone_abbreviation: string
	elevation: number
	current_units: Units
	current: Current
	hourly_units: Units
	hourly: Hourly
	daily_units: DailyUnits
	daily: Daily
}

export type Current = {
	time: string
	interval: number
	temperature_2m: number
	relativehumidity_2m: number
	apparent_temperature: number
	is_day: number
	precipitation: number
	rain: number
	weathercode: number
	windspeed_10m: number
}

export type Units = {
	time: string
	interval?: string
	temperature_2m: string
	relativehumidity_2m: string
	apparent_temperature: string
	is_day: string
	precipitation: string
	rain: string
	weathercode: string
	windspeed_10m: string
	precipitation_probability?: string
	windspeed_180m?: string
}

export type Daily = {
	time: Date[]
	weathercode: number[]
	temperature_2m_max: number[]
	temperature_2m_min: number[]
	rain_sum: number[]
}

export type DailyUnits = {
	time: string
	weathercode: string
	temperature_2m_max: string
	temperature_2m_min: string
	rain_sum: string
}

export type Hourly = {
	time: string[]
	temperature_2m: number[]
	relativehumidity_2m: number[]
	apparent_temperature: number[]
	precipitation_probability: number[]
	precipitation: number[]
	rain: number[]
	weathercode: number[]
	windspeed_10m: number[]
	windspeed_180m: number[]
	is_day: number[]
}
