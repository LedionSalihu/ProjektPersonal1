import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.title}>💪 FITSTORE</Text>
        <Text style={styles.tagline}>
          Train harder. Lift stronger. Live better.
        </Text>

        <TouchableOpacity
          style={styles.cta}
          onPress={() => navigation.navigate('Products')}
        >
          <Text style={styles.ctaText}>Shop Fitness Gear</Text>
        </TouchableOpacity>
      </View>

      {/* WHY FITSTORE */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why FITSTORE?</Text>

        <View style={styles.row}>
          <Ionicons name="flash-outline" size={22} color={colors.primary} />
          <Text style={styles.rowText}>
            Premium-quality equipment and supplements
          </Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="shield-checkmark-outline" size={22} color={colors.primary} />
          <Text style={styles.rowText}>
            Trusted by athletes and fitness professionals
          </Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="trending-up-outline" size={22} color={colors.primary} />
          <Text style={styles.rowText}>
            Designed to boost performance and results
          </Text>
        </View>
      </View>

      {/* CATEGORIES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop by Category</Text>

        <View style={styles.categories}>
          <View style={styles.categoryCard}>
            <Ionicons name="barbell-outline" size={28} color={colors.primary} />
            <Text style={styles.categoryText}>Equipment</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="nutrition-outline" size={28} color={colors.primary} />
            <Text style={styles.categoryText}>Supplements</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="walk-outline" size={28} color={colors.primary} />
            <Text style={styles.categoryText}>Accessories</Text>
          </View>
        </View>
      </View>

      {/* MOTIVATION */}
      <View style={styles.motivation}>
        <Text style={styles.quote}>
          “Your body can stand almost anything. It’s your mind you have to
          convince.”
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

  hero: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: colors.primary,
    marginBottom: spacing.s,
  },
  tagline: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.l,
  },
  cta: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.xl,
    borderRadius: 30,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
  },

  section: {
    paddingHorizontal: spacing.l,
    marginBottom: spacing.l,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.m,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.s,
  },
  rowText: {
    marginLeft: spacing.m,
    fontSize: 15,
    color: colors.text,
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    flex: 1,
    backgroundColor: colors.card,
    padding: spacing.m,
    borderRadius: 18,
    alignItems: 'center',
    marginHorizontal: spacing.s,
  },
  categoryText: {
    marginTop: spacing.s,
    fontWeight: '700',
    color: colors.text,
  },

  motivation: {
    margin: spacing.l,
    padding: spacing.l,
    backgroundColor: colors.card,
    borderRadius: 20,
  },
  quote: {
    fontStyle: 'italic',
    fontSize: 14,
    textAlign: 'center',
    color: colors.muted,
  },
});
