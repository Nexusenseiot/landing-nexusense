export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="relative min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <div className="absolute inset-0 bg-[url('/bg-nexusense.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            NexuSense <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">IoT</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Soluções inteligentes para monitoramento de água em condomínios.<br />
            Simples, eficiente e conectado.
          </p>
          <a
            href="https://wa.me/5568996055488"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition"
          >
            Fale com a gente no WhatsApp
          </a>
        </div>
      </main>

      {/* DASHBOARD SIMULADA */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Dashboard IoT em tempo real</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Reservatório Superior</h3>
              <p className="mb-1">Nível atual: <span className="text-cyan-300 font-semibold">75%</span></p>
              <p>Status da bomba: <span className="text-green-400 font-semibold">Ativa</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Cisterna</h3>
              <p className="mb-1">Nível atual: <span className="text-cyan-300 font-semibold">40%</span></p>
              <p>Status da bomba: <span className="text-red-400 font-semibold">Inativa</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Consumo Diário</h3>
              <p className="mb-1">Água consumida: <span className="text-cyan-300 font-semibold">2800L</span></p>
              <p>Média por apartamento: <span className="text-yellow-400 font-semibold">140L</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-white text-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Por que escolher a NexuSense IoT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">📡 Monitoramento em tempo real</h3>
              <p>Acompanhe o nível da água dos reservatórios 24h por dia com dados ao vivo.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">⚠️ Alertas inteligentes</h3>
              <p>Receba notificações automáticas de níveis críticos ou falhas no sistema.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">💧 Economia e sustentabilidade</h3>
              <p>Identifique desperdícios e otimize o uso da água com nossos relatórios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMONSTRAÇÃO */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Veja a plataforma em ação</h2>
          <img
            src="demo-dashboard.jfif"
            alt="Dashboard IoT"
            className="rounded-xl shadow-xl mx-auto max-w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}
