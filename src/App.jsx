import logo from './assets/Logo.png'

const CARDAPIO_URL = 'https://app.cardapioweb.com/cantinhobaiano'

function App() {
  return (
    <main className="page">
      <div className="hero">
        <img
          src={logo}
          alt="Cantinho Baiano"
          className="logo"
          width="1600"
          height="1600"
          fetchPriority="high"
        />

        <a
          href={CARDAPIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          IR ATÉ O CARDÁPIO
        </a>
      </div>
    </main>
  )
}

export default App
