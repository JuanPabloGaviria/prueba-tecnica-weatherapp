import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './context/WeatherContext';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import DetailScreen from './screens/DetailScreen';
import { RootStackParamList } from './types/navigation';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { ThemeProvider } from './context/ThemeContext';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <ThemeProvider>
        <Provider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' },
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="History" component={HistoryScreen} />
              <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}