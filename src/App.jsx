import logo from './assets/Logo.png'
import whatsappLogo from './assets/whatsapp-logo.png'

const CARDAPIO_URL = 'https://app.cardapioweb.com/cantinhobaiano'
const WHATSAPP_URL = 'https://wa.me/5524999343582'

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

        <div className="action-buttons">
          <a
            href={CARDAPIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            IR ATÉ O CARDÁPIO
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button whatsapp-button"
            aria-label="Falar com o Cantinho Baiano pelo WhatsApp"
          >
            <img
              src={whatsappLogo}
              alt=""
              className="whatsapp-icon"
            />

            WHATSAPP
          </a>
        </div>
      </div>
    </main>
  )
}

export default App
