import { API_KEY, BASE_URL } from '../../src/utils/constants';
import { WeatherData } from '../../src/types';

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Ciudad no encontrada. Verifica el nombre e intente de nuevo.');
      }
      throw new Error('Error al obtener datos del clima. Intente de nuevo más tarde.');
    }
    
    const data = await response.json();
    
    return {
      id: String(Date.now()),
      city: data.name,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon,
      timestamp: Date.now(),
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Error desconocido. Intente de nuevo más tarde.');
  }
};