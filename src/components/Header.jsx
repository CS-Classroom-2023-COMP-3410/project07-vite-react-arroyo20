function Header({ currentPage, onNavigate, cartCount }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'profile', label: 'Profile' },
    { id: 'cart', label: `Cart (${cartCount})` }
  ];

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      marginBottom: '20px'
    }}>
      <strong>React Multi-Page Demo</strong>

      <nav>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                style={{
                  textDecoration: 'none',
                  fontWeight: currentPage === item.id ? 'bold' : 'normal'
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
