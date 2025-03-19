import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WeatherData } from '../../src/types';

interface WeatherCardProps {
  weather: WeatherData | null;
  loading: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, loading }) => {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={styles.loadingText}>Obteniendo datos del clima...</Text>
      </View>
    );
  }

  if (!weather) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.city}>{weather.city}</Text>
        <Text style={styles.date}>
          {new Date(weather.timestamp).toLocaleString()}
        </Text>
      </View>

      <View style={styles.mainInfo}>
        <Text style={styles.temperature}>{weather.temperature}°C</Text>
        <View style={styles.weatherIcon}>
          <Image 
            source={{ uri: `https://openweathermap.org/img/wn/${weather.icon}@4x.png` }} 
            style={styles.icon} 
          />
          <Text style={styles.description}>{weather.description}</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Ionicons name="water-outline" size={24} color="#60a5fa" />
          <Text style={styles.detailValue}>{weather.humidity}%</Text>
          <Text style={styles.detailLabel}>Humedad</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.detailItem}>
          <Ionicons name="speedometer-outline" size={24} color="#60a5fa" />
          <Text style={styles.detailValue}>{weather.windSpeed} km/h</Text>
          <Text style={styles.detailLabel}>Viento</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loadingContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  loadingText: {
    marginTop: 12,
    color: '#6b7280',
    fontSize: 16,
  },
  header: {
    marginBottom: 16,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  date: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  mainInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  weatherIcon: {
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    textTransform: 'capitalize',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 16,
  },
  detailItem: {
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#f3f4f6',
  },
  detailValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 4,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
});

export default WeatherCard;