import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/Colors';

export function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.container} accessibilityRole="progressbar">
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
  },
  message: {
    color: colors.textMuted,
    fontSize: 16,
  },
});
