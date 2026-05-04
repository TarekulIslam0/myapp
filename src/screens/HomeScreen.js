import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDynamicTheme } from '../components/DynamicTheme';

export default function HomeScreen() {
  const { theme } = useDynamicTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
