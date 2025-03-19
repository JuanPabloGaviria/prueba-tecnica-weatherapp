import { API_KEY, BASE_URL } from '../utils/constants';
import { WeatherData } from '../types';

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    // Log para depuración
    console.log('Fetching weather for city:', city);
    
    // Construir URL
    const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
    
    // Realizar la solicitud
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Ciudad no encontrada. Verifica el nombre e intenta de nuevo.');
      }
      
      // Intentar obtener detalles del error
      try {
        const errorData = await response.json();
        console.error('API Error details:', errorData);
        throw new Error(`Error del API: ${errorData.message || 'Error desconocido'}`);
      } catch (parseError) {
        throw new Error('Error al obtener datos del clima. Intenta de nuevo más tarde.');
      }
    }
    
    const data = await response.json();
    console.log('Weather data received:', data);
    
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
    console.error('Error fetching weather:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Error desconocido. Intenta de nuevo más tarde.');
  }
};
