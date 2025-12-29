import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContexts';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function CartScreen() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.empty}>Your cart is empty 🛒</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.l,
    backgroundColor: colors.background,
  },
  empty: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    color: colors.muted,
  },
  item: {
    backgroundColor: '#fff',
    padding: spacing.m,
    borderRadius: 15,
    marginBottom: spacing.m,
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
  },
  price: {
    fontWeight: '900',
    color: colors.primary,
    marginTop: 5,
  },
});
