import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useWeather } from '../../src/utils/hooks';
import HistoryItem from '../../src/components/HistoryItem';
import { clearWeatherHistory } from '../../src/services/storageService';
import { WeatherData } from '../../src/types';

export default function HistoryScreen() {
  const router = useRouter();
  const { history, loadHistory, searchWeather } = useWeather();

  const handleClearHistory = async () => {
    await clearWeatherHistory();
    loadHistory();
  };

  const handleHistoryItemPress = (city: string) => {
    searchWeather(city);
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Historial de búsquedas</Text>
          <TouchableOpacity 
            style={styles.clearButton} 
            onPress={handleClearHistory}
            disabled={history.length === 0}
          >
            <Ionicons 
              name="trash-outline" 
              size={22} 
              color={history.length === 0 ? '#d1d5db' : '#ef4444'} 
            />
          </TouchableOpacity>
        </View>
        
        {history.length > 0 ? (
          <FlatList
            data={history}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <HistoryItem item={item} onPress={handleHistoryItemPress} />
            )}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons name="search" size={64} color="#d1d5db" />
            <Text style={styles.emptyText}>
              No hay búsquedas recientes
            </Text>
            <Text style={styles.emptySubtext}>
              Tus búsquedas aparecerán aquí.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  clearButton: {
    padding: 8,
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b7280',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#9ca3af',
    marginTop: 8,
    textAlign: 'center',
  },
});