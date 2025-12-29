import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { getProductById } from '../Services/api';
import { productImages } from '../data/ProductImages';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return null;

  return (
    <View style={styles.container}>
      <Image
        source={
          productImages[product.id]
            ? productImages[product.id]
            : { uri: product.image }
        }
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="cart-outline" size={22} color="#000" />
        <Text style={styles.buttonText}> Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.l,
  },
  image: {
    width: '100%',
    height: 280,
    backgroundColor: '#fff',
    borderRadius: 22,
    marginBottom: spacing.l,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.text,
    marginBottom: spacing.m,
  },
  desc: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
    marginBottom: spacing.l,
  },
  price: {
    fontSize: 26,
    fontWeight: '900',
    color: colors.primary,
    marginBottom: spacing.l,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 20,
  },
  buttonText: {
    marginLeft: spacing.s,
    fontWeight: '800',
    fontSize: 16,
    color: '#000',
  },
});
