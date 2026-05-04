import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDynamicTheme } from '../components/DynamicTheme';

export default function PlaylistsScreen() {
  const { theme } = useDynamicTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Playlists Screen</Text>
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
