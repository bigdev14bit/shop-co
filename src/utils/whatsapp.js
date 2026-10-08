// src/utils/whatsapp.js
import { WHATSAPP_NUMBER } from '../data/products';

export function buildWhatsAppLink(cartItems) {
  if (!cartItems.length) return '';

  const lines = cartItems.map((item, idx) => {
    const variant = [item.size, item.color].filter(Boolean).join(' / ');
    const variantText = variant ? ` (${variant})` : '';
    return `${idx + 1}. ${item.title}${variantText} - ₦${item.price.toLocaleString()} x${item.quantity}`;
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const message = [
    "Hi! I'd like to order:",
    "",
    ...lines,
    "",
    `Total: ₦${total.toLocaleString()}`,
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildSingleProductLink(product, size, color) {
  const variant = [size, color].filter(Boolean).join(' / ');
  const variantText = variant ? ` (${variant})` : '';
  const message = `Hi! I'm interested in: ${product.title}${variantText} - ₦${product.price.toLocaleString()}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
