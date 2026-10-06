import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/Colors';

export function FeedbackState({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message} selectable>
        {message}
      </Text>
      {onRetry ? (
        <Pressable
          accessibilityRole="button"
          onPress={onRetry}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Reintentar</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 24,
  },
  message: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    borderCurve: 'continuous',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonPressed: {
    opacity: 0.82,
  },
  buttonText: {
    color: colors.surface,
    fontWeight: '700',
  },
});
