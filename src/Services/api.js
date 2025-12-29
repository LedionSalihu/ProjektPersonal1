const BASE_URL =
  'https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json';

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch products');
    const allProducts = await response.json();
    // filter only fitness products
    return allProducts.filter(
      (product) => product.category === 'Health & Fitness'
    );
  } catch (error) {
    console.log('getProducts error:', error);
    return [];
  }
};

// Fetch single product by ID
export const getProductById = async (id) => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch product');
    const allProducts = await response.json();
    return allProducts.find((product) => product.id === id) || null;
  } catch (error) {
    console.log('getProductById error:', error);
    return null;
  }
};
