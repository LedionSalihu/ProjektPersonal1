import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function ContactScreen() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {/* PAGE 1 */}
      <View style={styles.page}>
        <Ionicons name="chatbubbles-outline" size={60} color={colors.primary} />
        <Text style={styles.title}>Contact Us</Text>

        <Text style={styles.text}>
          Have a question or need support?  
          We’re here to help.
        </Text>

        <Text style={styles.swipe}>Swipe ➡️</Text>
      </View>

      {/* PAGE 2 */}
      <View style={styles.page}>
        <View style={styles.card}>
          <Ionicons name="mail-outline" size={30} color={colors.primary} />
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>support@fitstore.com</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="call-outline" size={30} color={colors.primary} />
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>+49 123 456 789</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="location-outline" size={30} color={colors.primary} />
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>Berlin, Germany</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  page: {
    width: '100%',
    padding: spacing.l,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.primary,
    marginVertical: spacing.m,
  },
  text: {
    fontSize: 15,
    color: colors.muted,
    textAlign: 'center',
    marginVertical: spacing.m,
  },
  swipe: {
    marginTop: spacing.l,
    fontSize: 13,
    color: colors.muted,
  },
  card: {
    backgroundColor: colors.card,
    padding: spacing.l,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    marginTop: spacing.s,
    color: colors.text,
  },
  value: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 4,
  },
});
