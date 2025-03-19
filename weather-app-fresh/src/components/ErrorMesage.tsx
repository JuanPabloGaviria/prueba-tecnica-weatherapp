import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ErrorState } from '../types';

interface ErrorMessageProps {
  error: ErrorState;
  onDismiss: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onDismiss }) => {
  if (!error.isError) return null;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="alert-circle" size={24} color="#f87171" />
      </View>
      <Text style={styles.message}>{error.message}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={onDismiss}>
        <Ionicons name="close" size={20} color="#6b7280" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fee2e2',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  message: {
    flex: 1,
    fontSize: 14,
    color: '#b91c1c',
  },
  closeButton: {
    padding: 4,
  },
});

export default ErrorMessage;