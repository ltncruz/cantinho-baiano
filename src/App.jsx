import { useEffect, useState } from 'react'

import logo from './assets/Logo.png'
import whatsappLogo from './assets/whatsapp-logo.png'

const CARDAPIO_URL = 'https://app.cardapioweb.com/cantinhobaiano'

const WHATSAPP_URL = 'https://wa.me/5524999343582'

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Rua+Manchester+722+Ponte+Alta+Volta+Redonda+RJ+27267-150'

const MAPA_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3321994037624!2d-44.131763500000005!3d-22.529225299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e98fe7d57571b%3A0x7f247f37fc0f8217!2sR.%20Manchester%2C%20722%20-%20Pte.%20Alta%2C%20Volta%20Redonda%20-%20RJ%2C%2027265-105!5e0!3m2!1spt-BR!2sbr!4v1790192576544!5m2!1spt-BR!2sbr'

const HORARIOS = [
  {
    dia: 'Segunda-feira',
    horario: 'Fechado',
    fechado: true,
  },
  {
    dia: 'Terça-feira',
    horario: '17h às 21h',
    fechado: false,
  },
  {
    dia: 'Quarta-feira',
    horario: '17h às 21h',
    fechado: false,
  },
  {
    dia: 'Quinta-feira',
    horario: '17h às 21h',
    fechado: false,
  },
  {
    dia: 'Sexta-feira',
    horario: '17h às 21h',
    fechado: false,
  },
  {
    dia: 'Sábado',
    horario: '16h às 21h',
    fechado: false,
  },
  {
    dia: 'Domingo',
    horario: 'Fechado',
    fechado: true,
  },
]

function verificarFuncionamento() {
  const agora = new Date()

  const formatador = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  })

  const partes = formatador.formatToParts(agora)

  const dados = {}

  for (const parte of partes) {
    dados[parte.type] = parte.value
  }

  const diaAtual = dados.weekday
  const horaAtual = Number(dados.hour)
  const minutoAtual = Number(dados.minute)

  const diasAbertos = [
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ]

  const minutosAtuais =
    horaAtual * 60 + minutoAtual

  const abertura = 17 * 60
  const fechamento = 21 * 60

  const funcionaHoje =
    diasAbertos.includes(diaAtual)

  const dentroDoHorario =
    minutosAtuais >= abertura &&
    minutosAtuais < fechamento

  return funcionaHoje && dentroDoHorario
}

function App() {
  const [estaAberto, setEstaAberto] = useState(
    verificarFuncionamento()
  )

  useEffect(() => {
    const atualizarStatus = () => {
      setEstaAberto(verificarFuncionamento())
    }

    atualizarStatus()

    const intervalo = setInterval(
      atualizarStatus,
      60 * 1000
    )

    return () => clearInterval(intervalo)
  }, [])

  return (
    <main className="page">

      {/* ---------- LOGO E BOTÕES ---------- */}

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


      {/* ---------- HORÁRIOS ---------- */}

      <section className="schedule-section">
        <div className="schedule-card">

          <h2 className="schedule-title">
            Horários de funcionamento
          </h2>

          <div
            className={
              estaAberto
                ? 'status-badge status-open'
                : 'status-badge status-closed'
            }
          >
            <span className="status-dot" />

            {estaAberto
              ? 'ABERTO AGORA'
              : 'FECHADO AGORA'}
          </div>

          <div className="schedule-list">
            {HORARIOS.map((item) => (
              <div
                className="schedule-row"
                key={item.dia}
              >
                <span className="schedule-day">
                  {item.dia}
                </span>

                <span
                  className={
                    item.fechado
                      ? 'schedule-time closed-time'
                      : 'schedule-time'
                  }
                >
                  {item.horario}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ---------- LOCALIZAÇÃO ---------- */}

      <section className="location-section">

        <div className="location-card">

          <h2 className="location-title">
            Onde estamos
          </h2>

          <p className="location-address">
            Rua Manchester, 722, Ponte Alta
            <br />
            Volta Redonda - RJ
            <br />
            CEP 27267-150
          </p>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
            aria-label="Abrir localização do Cantinho Baiano no Google Maps"
          >
            <div className="map-preview">

              <iframe
                src={MAPA_EMBED_URL}
                title="Localização do Cantinho Baiano"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                tabIndex="-1"
              />

              <div className="map-overlay">
                ABRIR NO GOOGLE MAPS
              </div>

            </div>
          </a>

        </div>

      </section>


      {/* ---------- RODAPÉ ---------- */}

      <footer className="footer">
        <p>
          Cantinho Baiano - 2026 - Todos direitos reservados.
        </p>
      </footer>

    </main>
  )
}

export default App
