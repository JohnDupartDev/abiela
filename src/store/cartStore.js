import { persistentAtom } from '@nanostores/persistent';

// Almacenamos el carrito en localStorage automáticamente
export const cartItems = persistentAtom('cart', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export function addToCart(product) {
    const existing = cartItems.get().find(item => item.name === product.name);
    if (existing) {
        cartItems.set(cartItems.get().map(item => 
            item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        ));
    } else {
        cartItems.set([...cartItems.get(), { ...product, quantity: 1 }]);
    }
}

export function removeFromCart(name) {
    cartItems.set(cartItems.get().filter(item => item.name !== name));
}

export function clearCart() {
    cartItems.set([]);
}