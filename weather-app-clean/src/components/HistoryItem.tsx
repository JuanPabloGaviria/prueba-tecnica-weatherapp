import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WeatherData } from '../../src/types';

interface HistoryItemProps {
  item: WeatherData;
  onPress: (city: string) => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item, onPress }) => {
  const formattedDate = new Date(item.timestamp).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress(item.city)}
    >
      <View style={styles.iconContainer}>
        <Image 
          source={{ uri: `https://openweathermap.org/img/wn/${item.icon}.png` }} 
          style={styles.icon} 
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.city}>{item.city}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>{item.temperature}°C</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color="#9ca3af" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
  },
  infoContainer: {
    flex: 1,
  },
  city: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  date: {
    fontSize: 14,
    color: '#6b7280',
  },
  temperatureContainer: {
    marginRight: 12,
  },
  temperature: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
});

export default HistoryItem;