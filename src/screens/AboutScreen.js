import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function AboutScreen() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {/* PAGE 1 */}
      <View style={styles.page}>
        <Ionicons name="information-circle-outline" size={60} color={colors.primary} />
        <Text style={styles.title}>About FITSTORE</Text>

        <Text style={styles.text}>
          FITSTORE is built for people who train hard and expect quality.
          From gym beginners to elite athletes — we support your journey.
        </Text>

        <Text style={styles.swipe}>Swipe ➡️</Text>
      </View>

      {/* PAGE 2 */}
      <View style={styles.page}>
        <Ionicons name="barbell-outline" size={60} color={colors.primary} />
        <Text style={styles.subtitle}>Our Mission</Text>

        <Text style={styles.text}>
          Empower people to become stronger, healthier and more confident
          through premium fitness equipment.
        </Text>

        <Ionicons name="trophy-outline" size={60} color={colors.primary} />
        <Text style={styles.subtitle}>Our Vision</Text>

        <Text style={styles.text}>
          To be a trusted fitness brand known for performance and motivation.
        </Text>
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
  subtitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginTop: spacing.m,
  },
  text: {
    fontSize: 15,
    color: colors.muted,
    textAlign: 'center',
    lineHeight: 22,
    marginVertical: spacing.m,
  },
  swipe: {
    marginTop: spacing.l,
    fontSize: 13,
    color: colors.muted,
  },
});
