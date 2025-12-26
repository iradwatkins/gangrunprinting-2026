export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #7c2d12 0%, #451a03 50%, #1c0a01 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>
          <span style={{ color: '#fb923c' }}>Gang Run</span> Printing
        </h1>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#how-it-works" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>How It Works</a>
          <a href="#products" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Products</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '5rem 2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700, lineHeight: 1.1 }}>
          Wholesale Printing<br />
          <span style={{ color: '#fb923c' }}>Without the Wholesale Minimums</span>
        </h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Gang run printing combines your order with others on the same sheet,
          passing the savings on to you. Same quality, fraction of the cost.
        </p>
        <a href="#products" style={{
          background: '#fb923c',
          color: '#1c0a01',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.1rem'
        }}>
          Start Saving Today
        </a>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>How Gang Run Works</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { step: '1', title: 'Submit Your Order', desc: 'Upload your print-ready files' },
            { step: '2', title: 'We Combine Orders', desc: 'Your job runs with others on large sheets' },
            { step: '3', title: 'You Save Big', desc: 'Up to 70% off traditional printing' },
          ].map((item, i) => (
            <div key={i} style={{
              textAlign: 'center',
              maxWidth: '280px',
              background: 'rgba(255,255,255,0.05)',
              padding: '2rem',
              borderRadius: '12px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#fb923c',
                color: '#1c0a01',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                margin: '0 auto 1rem'
              }}>{item.step}</div>
              <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ opacity: 0.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{
        padding: '4rem 2rem'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Gang Run Products</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Business Cards', price: 'From $19/1000' },
            { name: 'Flyers & Postcards', price: 'From $29/1000' },
            { name: 'Brochures', price: 'From $99/500' },
            { name: 'Door Hangers', price: 'From $59/500' },
            { name: 'Rack Cards', price: 'From $49/500' },
            { name: 'Bookmarks', price: 'From $39/500' },
          ].map((product, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '1.5rem',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontWeight: 500 }}>{product.name}</span>
              <span style={{ color: '#fb923c', fontWeight: 600 }}>{product.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Save?</h3>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          Contact us for custom quotes and volume pricing.
        </p>
        <a href="mailto:orders@gangrunprinting.com" style={{
          color: '#fb923c',
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>
          orders@gangrunprinting.com
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        opacity: 0.6
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Gang Run Printing. All rights reserved.</p>
      </footer>
    </main>
  )
}
