import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="relative min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <div className="absolute inset-0 bg-[url('/demo-dashboard.jfif')] bg-cover bg-center brightness-75" />
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

      {/* DASHBOARD ANIMADO - PAINÉIS CENTRAIS */}
      <section className="relative bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Veja a plataforma em ação</h2>

          <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/demo-dashboard.jfif"
              alt="Dashboard IoT"
              className="w-full h-full object-cover brightness-90"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 py-6 md:py-10 bg-black/40">
              <div className="w-full max-w-md bg-black/80 backdrop-blur-md text-left text-sm p-4 rounded-xl border border-cyan-400 animate-pulse shadow-lg">
                <h3 className="font-bold text-cyan-300 mb-2">Reservatório Superior</h3>
                <p>Nível atual: <span className="text-cyan-200 font-semibold">75%</span></p>
                <p>Volume: <span className="text-white">15000L</span></p>
                <p>Status da bomba: <span className="text-green-400 font-semibold">Ativa</span></p>
                <p className="text-xs text-gray-400 mt-2">Atualizado há 10s</p>
              </div>

              <div className="w-full max-w-md bg-black/80 backdrop-blur-md text-left text-sm p-4 rounded-xl border border-yellow-400 animate-pulse shadow-lg">
                <h3 className="font-bold text-yellow-300 mb-2">Cisterna</h3>
                <p>Nível atual: <span className="text-yellow-100 font-semibold">42%</span></p>
                <p>Volume: <span className="text-white">8400L</span></p>
                <p>Status da bomba: <span className="text-red-400 font-semibold">Inativa</span></p>
                <p className="text-xs text-gray-400 mt-2">Atualizado há 8s</p>
              </div>

              <div className="w-full max-w-md bg-black/80 backdrop-blur-md text-left text-sm p-4 rounded-xl border border-green-400 animate-pulse shadow-lg">
                <h3 className="font-bold text-green-300 mb-2">Consumo Diário</h3>
                <p>Total: <span className="text-white font-semibold">2.800L</span></p>
                <p>Média por apê: <span className="text-white font-semibold">140L</span></p>
                <p className="text-xs text-gray-400 mt-2">Atualizado em tempo real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGENS COM DADOS */}
<section className="bg-black text-white py-16 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    {[
      { src: 'reservatorio1.jfif', titulo: 'Reservatório 1', nivel: '82%', volume: '16400L' },
      { src: 'reservatorio2.jfif', titulo: 'Reservatório 2', nivel: '39%', volume: '7800L' },
      { src: 'bombas1.jfif', titulo: 'Sala das Bombas 1', status: 'Ativa' },
      { src: 'bombas2.jfif', titulo: 'Sala das Bombas 2', status: 'Inativa' },
    ].map((img, i) => (
      <div key={i} className="relative rounded-xl overflow-hidden shadow-2xl">
        <img
          src={`/${img.src}`}
          alt={img.titulo}
          className="w-full h-[300px] object-cover brightness-125 saturate-200 contrast-125"
        />
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-cyan-400 shadow-xl animate-pulse w-fit max-w-[80%]">
          <h3 className="text-cyan-300 font-bold text-lg mb-2 drop-shadow-[0_0_4px_rgba(0,255,255,0.8)]">
            {img.titulo}
          </h3>
          {img.nivel && (
            <>
              <p className="text-cyan-100">
                Nível atual: <span className="font-bold">{img.nivel}</span>
              </p>
              <p>
                Volume: <span className="text-white font-semibold">{img.volume}</span>
              </p>
            </>
          )}
          {img.status && (
            <p>
              Status da bomba:{' '}
              <span
                className={`font-semibold ${
                  img.status === 'Ativa' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {img.status}
              </span>
            </p>
          )}
          <p className="text-xs text-gray-300 mt-2">Atualizado há poucos segundos</p>
        </div>
      </div>
    ))}
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
