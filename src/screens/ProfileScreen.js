import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* PROFILE ICON */}
      <Ionicons
        name="person-circle-outline"
        size={120}
        color={colors.primary}
        style={styles.icon}
      />

      {/* USER INFO */}
      <Text style={styles.name}>Guest User</Text>
      <Text style={styles.email}>guest@fitstore.com</Text>

      {/* ACTIONS */}
      <TouchableOpacity style={styles.action}>
        <Ionicons name="settings-outline" size={22} color={colors.primary} />
        <Text style={styles.actionText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.action}>
        <Ionicons name="help-circle-outline" size={22} color={colors.primary} />
        <Text style={styles.actionText}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout}>
        <Ionicons name="log-out-outline" size={22} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    padding: spacing.l,
  },
  icon: {
    marginTop: spacing.xl,
  },
  name: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.primary,
    marginTop: spacing.m,
  },
  email: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: spacing.xl,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: spacing.m,
    borderRadius: 14,
    backgroundColor: colors.card,
    marginBottom: spacing.s,
  },
  actionText: {
    marginLeft: spacing.m,
    fontSize: 16,
    color: colors.text,
  },
  logout: {
    marginTop: spacing.l,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: '800',
    marginLeft: spacing.s,
  },
});
