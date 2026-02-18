import ShoppingCart from '../components/ShoppingCart';

function CartPage({ cart, removeFromCart }) {
  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default CartPage;
