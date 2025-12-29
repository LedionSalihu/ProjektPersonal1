import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContexts';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty 😔</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Ionicons name="trash-outline" size={24} color="red" />
                </TouchableOpacity>
              </View>
            )}
          />

          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={styles.clearText}>Clear Cart</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.l, backgroundColor: colors.background },
  empty: { textAlign: 'center', marginTop: spacing.xl, fontSize: 16, color: colors.muted },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: spacing.m,
    borderRadius: 14,
    marginBottom: spacing.s,
  },
  title: { fontSize: 16, fontWeight: '700', color: colors.text },
  price: { fontSize: 15, color: colors.muted },
  clearButton: {
    marginTop: spacing.l,
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 30,
    alignItems: 'center',
  },
  clearText: { color: '#fff', fontWeight: '800' },
});
