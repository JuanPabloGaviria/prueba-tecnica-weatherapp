import { OPENWEATHER_API_KEY } from '@env';

export const API_KEY = OPENWEATHER_API_KEY || ''; // Leer desde variables de entorno
export const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const STORAGE_KEY = '@weather_history';