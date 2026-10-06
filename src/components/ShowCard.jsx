import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/Colors';

export function ShowCard({ title, imageUrl, description }) {
  return (
    <View style={styles.card}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.imageFallback]}>
          <Text style={styles.imageFallbackText}>Sin imagen</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title} selectable>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={5} selectable>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: 14,
    borderCurve: 'continuous',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    width: '100%',
    height: 220,
    backgroundColor: colors.primarySoft,
  },
  imageFallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageFallbackText: {
    color: colors.textMuted,
    fontWeight: '600',
  },
  content: {
    gap: 8,
    padding: 16,
  },
  title: {
    color: colors.primaryDark,
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 21,
  },
});
