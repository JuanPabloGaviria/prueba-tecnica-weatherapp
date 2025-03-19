import { useState, useEffect, useCallback } from 'react';
import { WeatherData, ErrorState } from '../types';
import { fetchWeatherData } from '../services/weatherService';
import { saveWeatherSearch, getWeatherHistory } from '../services/storageService';

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [history, setHistory] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>({ isError: false, message: '' });

  // Cargar historial al iniciar
  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = useCallback(async () => {
    const historyData = await getWeatherHistory();
    setHistory(historyData);
  }, []);

  const searchWeather = useCallback(async (city: string) => {
    if (!city.trim()) {
      setError({
        isError: true,
        message: 'Por favor ingresa el nombre de una ciudad.'
      });
      return;
    }

    setLoading(true);
    setError({ isError: false, message: '' });

    try {
      const data = await fetchWeatherData(city);
      setCurrentWeather(data);
      await saveWeatherSearch(data);
      await loadHistory(); // Recargar historial con la nueva búsqueda
    } catch (error) {
      if (error instanceof Error) {
        setError({
          isError: true,
          message: error.message
        });
      }
    } finally {
      setLoading(false);
    }
  }, [loadHistory]);

  const dismissError = useCallback(() => {
    setError({ isError: false, message: '' });
  }, []);

  return {
    currentWeather,
    history,
    loading,
    error,
    searchWeather,
    loadHistory,
    dismissError
  };
};