import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppBar } from '../components/AppBar';
import { useProfileScreen } from '../hooks/UseProfileScreen';
import { colors } from '../theme/Colors';

export function ProfileScreen({ navigation }) {
  const { student, openShows } = useProfileScreen(navigation);

  return (
    <View style={styles.screen}>
      <AppBar title="Inicio" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.heading}>Mi humilde informacion</Text>
          <InfoRow label="Nombre" value={student.name} />
          <InfoRow label="Carnet" value={student.studentId} />
          <InfoRow label="Grupo y sección" value={student.groupAndSection} />
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={openShows}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Ver series de TV</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value} selectable>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    alignItems: 'center',
    gap: 22,
    padding: 24,
    paddingBottom: 40,
  },
  avatar: {
    width: 92,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 46,
    backgroundColor: colors.primary,
    borderWidth: 5,
    borderColor: colors.primarySoft,
  },
  avatarText: {
    color: colors.surface,
    fontSize: 30,
    fontWeight: '800',
  },
  card: {
    width: '100%',
    gap: 16,
    borderRadius: 14,
    borderCurve: 'continuous',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
  heading: {
    color: colors.primaryDark,
    fontSize: 20,
    fontWeight: '700',
  },
  row: {
    gap: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
  },
  label: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  value: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 24,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 12,
    borderCurve: 'continuous',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonPressed: {
    backgroundColor: colors.primaryDark,
  },
  buttonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '700',
  },
});
