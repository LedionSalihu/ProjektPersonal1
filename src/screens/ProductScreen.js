import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import { getProducts } from '../Services/api';
import { productImages } from '../data/ProductImages';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { CartContext } from '../contexts/CartContexts';
import { Ionicons } from '@expo/vector-icons';

export default function ProductScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: spacing.m }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Product Image */}
            <Image
              source={
                productImages[item.id]
                  ? productImages[item.id]
                  : { uri: item.image }
              }
              style={styles.image}
              resizeMode="contain"
            />

            {/* Product Info */}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>

            {/* Buttons */}
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Details', { id: item.id })}
              >
                <Text style={styles.buttonText}>Details</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: colors.secondary }]}
                onPress={() => addToCart(item)}
              >
                <Ionicons name="cart-outline" size={16} color="#fff" />
                <Text style={styles.buttonText}> Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.m,
    marginBottom: spacing.m,
    alignItems: 'center',
  },
  image: { width: '100%', height: 180, borderRadius: 12, marginBottom: spacing.s },
  title: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: spacing.s },
  price: { fontSize: 14, color: colors.muted, marginBottom: spacing.m },
  actions: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.m,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
