const PRODUCTS = [
    {
        id: 100,
        name: 'ReactProx Smartphone',
        price: 90000,
        image: require('../assets/products/smartphone_X1.jpg'),
        description: 'A latest smartphone having 16.55cm'
    },
    {
        id: 101,
        name: 'Battery Plane',
        price: 1450,
        image: require('../assets/products/electrict_plane.jpg'),
        description: 'Saisha COLLECTIONS'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProducts(id) {
    return PRODUCTS.find((product) => (product.id == id));
}