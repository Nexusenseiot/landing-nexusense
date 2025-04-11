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

      {/* NOVAS IMAGENS COM SOBREPOSIÇÃO DE DADOS */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Monitoramento em tempo real</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { src: "/reservatorio1.jfif", titulo: "Reservatório A", nivel: "82%", volume: "16400L", cor: "cyan" },
              { src: "/reservatorio2.jfif", titulo: "Reservatório B", nivel: "68%", volume: "13600L", cor: "blue" },
              { src: "/bombas1.jfif", titulo: "Sala de Bombas 1", status: "Ativa", cor: "green" },
              { src: "/bombas2.jfif", titulo: "Sala de Bombas 2", status: "Inativa", cor: "red" },
            ].map((item, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src={item.src} alt={item.titulo} className="w-full h-64 object-cover" />
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-start justify-end p-4`}>
                  <h3 className={`text-${item.cor}-300 font-bold text-xl mb-1`}>{item.titulo}</h3>
                  {item.nivel && <p>Nível: <span className="font-semibold">{item.nivel}</span></p>}
                  {item.volume && <p>Volume: <span className="font-semibold">{item.volume}</span></p>}
                  {item.status && <p>Status: <span className={`text-${item.cor}-400 font-semibold`}>{item.status}</span></p>}
                </div>
              </div>
            ))}
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
