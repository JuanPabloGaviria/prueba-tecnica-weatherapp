import { OPENWEATHER_API_KEY } from '@env';

// Verificar si la API key está disponible
if (!OPENWEATHER_API_KEY) {
  console.warn('API Key no encontrada en variables de entorno. La aplicación podría no funcionar correctamente.');
}

export const API_KEY = OPENWEATHER_API_KEY;
export const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const STORAGE_KEY = '@weather_history';