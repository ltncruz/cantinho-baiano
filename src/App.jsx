import { useEffect, useState } from 'react'

import logo from './assets/Logo.png'
import whatsappLogo from './assets/whatsapp-logo.png'

const CARDAPIO_URL = 'https://app.cardapioweb.com/cantinhobaiano'
const WHATSAPP_URL = 'https://wa.me/5524999343582'

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
    horario: '17h às 21h',
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

  const diasAbertos = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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
    </main>
  )
}

export default App
