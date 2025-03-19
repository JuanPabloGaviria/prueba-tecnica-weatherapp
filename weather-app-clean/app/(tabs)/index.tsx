import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useWeather } from '../../src/utils/hooks';
import SearchBar from '../../src/components/searchBar';
import WeatherCard from '../../src/components/WeatherCard';
import HistoryItem from '../../src/components/HistoryItem';
import ErrorMessage from '../../src/components/ErrorMessage';
import { WeatherData } from '../../src/types';

export default function HomeScreen() {
  const { 
    currentWeather, 
    history, 
    loading, 
    error, 
    searchWeather,
    dismissError
  } = useWeather();

  const handleHistoryItemPress = (city: string) => {
    searchWeather(city);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Clima App</Text>
        </View>
        
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <SearchBar onSearch={searchWeather} loading={loading} />
          
          <ErrorMessage error={error} onDismiss={dismissError} />
          
          <WeatherCard weather={currentWeather} loading={loading} />
          
          {history.length > 0 && (
            <View style={styles.historyContainer}>
              <View style={styles.historyHeader}>
                <Text style={styles.historyTitle}>Búsquedas recientes</Text>
              </View>
              
              {history.slice(0, 3).map((item: WeatherData) => (
                <HistoryItem 
                  key={item.id} 
                  item={item} 
                  onPress={handleHistoryItemPress} 
                />
              ))}
            </View>
          )}
        </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  historyContainer: {
    marginTop: 16,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
});
