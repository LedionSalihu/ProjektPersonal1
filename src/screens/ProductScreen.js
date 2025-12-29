import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useEffect, useState } from 'react';
import { getProducts } from '../Services/api';
import { productImages } from '../data/ProductImages';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function ProductScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { id: item.id })}
    >
      <Image
        source={
          productImages[item.id]
            ? productImages[item.id]
            : { uri: item.image }
        }
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ gap: spacing.m }}
        contentContainerStyle={{ padding: spacing.m }}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: spacing.m,
    marginBottom: spacing.m,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 120,
    marginBottom: spacing.m,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.s,
  },
  price: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.primary,
  },
});
