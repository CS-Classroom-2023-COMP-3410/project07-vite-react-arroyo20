import Button from './Button';

function ShoppingCart({ cart, removeFromCart, compact = false }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '8px'
    }}>
      <h3>Shopping Cart</h3>

      <ul style={{ padding: 0, listStyle: 'none' }}>
        {cart.map(item => (
          <li key={item.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #ddd',
            padding: '8px 0'
          }}>
            <div>
              <strong>{item.title}</strong> × {item.quantity}
              {!compact && <div>${item.price * item.quantity}</div>}
            </div>
            <Button
              variant="danger"
              onClick={() => removeFromCart(item.id)}
            >
              −
            </Button>
          </li>
        ))}
      </ul>

      <div style={{
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <strong>Total:</strong>
        <strong>${totalPrice}</strong>
      </div>
    </div>
  );
}

export default ShoppingCart;
