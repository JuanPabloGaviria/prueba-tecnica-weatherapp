export interface WeatherData {
  id: string;
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  timestamp: number;
}

export interface ErrorState {
  isError: boolean;
  message: string;
}