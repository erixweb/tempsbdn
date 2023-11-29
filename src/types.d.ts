export type Weather = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: Hourly;
};

export type Hourly = {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  apparent_temperature: number[];
  precipitation: number[];
  weather_code: number[];
  surface_pressure: number[];
  wind_speed_10m: number[];
  wind_direction_10m: number[];
};

export type HourlyUnits = {
  time: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  precipitation: string;
  weather_code: string;
  surface_pressure: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
};
