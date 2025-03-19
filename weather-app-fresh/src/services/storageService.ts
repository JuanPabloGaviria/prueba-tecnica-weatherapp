import AsyncStorage from '@react-native-async-storage/async-storage';
import { WeatherData } from '../types';
import { STORAGE_KEY } from '../utils/constants';

export const saveWeatherSearch = async (weatherData: WeatherData): Promise<void> => {
  try {
    // Obtener historial existente
    const history = await getWeatherHistory();
    
    // Limitar a 10 elementos y agregar el nuevo al inicio
    const updatedHistory = [weatherData, ...history.filter(item => item.city !== weatherData.city)].slice(0, 10);
    
    // Guardar en AsyncStorage
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Error al guardar búsqueda:', error);
  }
};

export const getWeatherHistory = async (): Promise<WeatherData[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error al obtener historial:', error);
    return [];
  }
};

export const clearWeatherHistory = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error al limpiar historial:', error);
  }
};