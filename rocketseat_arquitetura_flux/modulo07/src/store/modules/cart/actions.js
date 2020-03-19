export function addToCart(prod) {
  return {
    type: '@cart/ADD',
    prod,
  };
}
export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
