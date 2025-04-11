import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="relative min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <div className="absolute inset-0 bg-[url('/demo-dashboard.jfif')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="relative z-10 text-center px-6 -mt-12">
          <Image
            src="/nexusense-logo.png"
            alt="Logo NexuSense IoT"
            width={480}
            height={240}
            priority
            className="mx-auto mb-4 drop-shadow-[0_0_25px_rgba(0,255,255,0.7)]"
          />
          <p className="text-2xl md:text-3xl max-w-2xl mx-auto mb-3">
            Soluções inteligentes para monitoramento de água em condomínios.
          </p>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-4 text-gray-300">
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

      {/* DASHBOARD ANIMADO */}
      <section className="relative bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Veja a plataforma em ação</h2>

          <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="relative col-span-2">
              <img
                src="/demo-dashboard.jfif"
                alt="Dashboard IoT"
                className="w-full h-full object-cover"
              />

              {/* Painel 1 - Reservatório Superior */}
              <div className="absolute top-[18%] left-[23%] w-72 bg-black/70 backdrop-blur-md text-left text-sm p-4 rounded-xl border border-cyan-400 animate-[pulse_3s_ease-in-out_infinite] shadow-lg">
                <h3 className="font-bold text-cyan-300 mb-2">Reservatório Superior</h3>
                <p className="mb-1">Nível atual: <span className="text-cyan-200 font-semibold">75%</span></p>
                <p className="mb-1">Volume: <span className="text-white">15000L</span></p>
                <p>Status da bomba: <span className="text-green-400 font-semibold">Ativa</span></p>
                <p className="text-xs text-gray-400 mt-2">Atualizado há 10s</p>
              </div>

              {/* Painel 2 - Cisterna */}
              <div className="absolute top-[50%] left-[48%] w-72 bg-black/70 backdrop-blur-md text-left text-sm p-4 rounded-xl border border-yellow-400 animate-[pulse_4s_ease-in-out_infinite] shadow-lg">
                <h3 className="font-bold text-yellow-300 mb-2">Cisterna</h3>
                <p className="mb-1">Nível atual: <span className="text-yellow-100 font-semibold">42%</span></p>
                <p className="mb-1">Volume: <span className="text-white">8400L</span></p>
                <p>Status da bomba: <span className="text-red-400 font-semibold">Inativa</span></p>
                <p className="text-xs text-gray-400 mt-2">Atualizado há 8s</p>
              </div>

              {/* Painel 3 - Consumo */}
              <div className="absolute top-[20%] right-[5%] w-72 bg-black/70 backdrop-blur-md text-left text-sm p-4 rounded-xl border border-green-400 animate-[pulse_5s_ease-in-out_infinite] shadow-lg">
                <h3 className="font-bold text-green-300 mb-2">Consumo Diário</h3>
                <p className="mb-1">Total: <span className="text-white font-semibold">2.800L</span></p>
                <p>Média por apê: <span className="text-white font-semibold">140L</span></p>
                <p className="text-xs text-gray-400 mt-2">Atualizado em tempo real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA DE IMAGENS COM DADOS SIMULADOS */}
      <section className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Imagens Reais da Instalação</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Imagem 1 - Reservatório 1 */}
            <div className="relative overflow-hidden rounded-xl shadow-xl group">
              <img src="/reservatorio1.jfif" alt="Reservatório 1" className="w-full h-60 object-cover" />
              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md p-3 rounded-lg text-sm border border-cyan-400 animate-pulse group-hover:scale-105 transition">
                <p className="font-bold text-cyan-300 mb-1">Reservatório A</p>
                <p>Nível: <span className="text-cyan-200 font-semibold">78%</span></p>
                <p>Volume: <span className="text-white">15600L</span></p>
                <p>Status: <span className="text-green-400 font-semibold">Ativa</span></p>
              </div>
            </div>

            {/* Imagem 2 - Reservatório 2 */}
            <div className="relative overflow-hidden rounded-xl shadow-xl group">
              <img src="/reservatorio2.jfif" alt="Reservatório 2" className="w-full h-60 object-cover" />
              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md p-3 rounded-lg text-sm border border-cyan-400 animate-pulse group-hover:scale-105 transition">
                <p className="font-bold text-cyan-300 mb-1">Reservatório B</p>
                <p>Nível: <span className="text-cyan-200 font-semibold">61%</span></p>
                <p>Volume: <span className="text-white">12200L</span></p>
                <p>Status: <span className="text-green-400 font-semibold">Ativa</span></p>
              </div>
            </div>

            {/* Imagem 3 - Bombas 1 */}
            <div className="relative overflow-hidden rounded-xl shadow-xl group">
              <img src="/bombas1.jfif" alt="Sala das Bombas 1" className="w-full h-60 object-cover" />
              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md p-3 rounded-lg text-sm border border-yellow-400 animate-pulse group-hover:scale-105 transition">
                <p className="font-bold text-yellow-300 mb-1">Sala de Bombas</p>
                <p>Bomba 1: <span className="text-green-400 font-semibold">Ligada</span></p>
                <p>Bomba 2: <span className="text-red-400 font-semibold">Desligada</span></p>
                <p className="text-xs text-gray-300 mt-1">Atualizado há 15s</p>
              </div>
            </div>

            {/* Imagem 4 - Bombas 2 */}
            <div className="relative overflow-hidden rounded-xl shadow-xl group">
              <img src="/bombas2.jfif" alt="Sala das Bombas 2" className="w-full h-60 object-cover" />
              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md p-3 rounded-lg text-sm border border-yellow-400 animate-pulse group-hover:scale-105 transition">
                <p className="font-bold text-yellow-300 mb-1">Controle de Pressão</p>
                <p>Pressão: <span className="text-white font-semibold">4.2 bar</span></p>
                <p>Status: <span className="text-green-400 font-semibold">Normal</span></p>
                <p className="text-xs text-gray-300 mt-1">Atualizado em tempo real</p>
              </div>
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
    </>
  );
}
