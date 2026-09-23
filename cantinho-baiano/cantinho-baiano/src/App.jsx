import logo from './assets/Logo.png'

// Folha tropical decorativa, desenhada em SVG inline (sem arquivos externos).
// A cor é controlada via CSS (currentColor) para variar o tom de verde em cada instância.
function Leaf({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 150"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M50 4 C82 26 94 66 76 104 C66 126 58 138 50 146 C42 138 34 126 24 104 C6 66 18 26 50 4 Z"
        fill="currentColor"
      />
      <path
        d="M50 16 C50 54 50 100 50 136"
        stroke="rgba(0,0,0,0.22)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 44 C40 50 32 56 26 62 M50 44 C60 50 68 56 74 62 M50 78 C40 84 33 90 27 95 M50 78 C60 84 67 90 73 95"
        stroke="rgba(0,0,0,0.18)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

function App() {
  return (
    <div className="page">
      <div className="leaves" aria-hidden="true">
        <Leaf className="leaf leaf-1" />
        <Leaf className="leaf leaf-2" />
        <Leaf className="leaf leaf-3" />
        <Leaf className="leaf leaf-4" />
        <Leaf className="leaf leaf-5" />
        <Leaf className="leaf leaf-6" />
      </div>

      <main className="hero">
        <div className="logo-glow" aria-hidden="true" />
        <img src={logo} alt="Cantinho Baiano" className="logo" />

        <a
          href="https://app.cardapioweb.com/cantinhobaiano"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          IR ATÉ O CARDÁPIO
        </a>
      </main>
    </div>
  )
}

export default App
