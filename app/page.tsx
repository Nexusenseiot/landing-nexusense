'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <section className="text-center py-20 px-4 bg-[url('/demo-dashboard.jfif')] bg-cover bg-center">
        <div className="bg-black/60 backdrop-blur-sm p-10 rounded-xl inline-block">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bem-vindo à <span className="text-blue-400">NexuSense IoT</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            Monitoramento inteligente para reservatórios e salas de bombas com tecnologia de ponta.
          </p>
          <a
            href="https://wa.me/5568996055488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      </section>

      {/* MONITORAMENTO EM TEMPO REAL */}
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
              <div key={idx} className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={item.src}
                  alt={item.titulo}
                  className="w-full h-64 object-cover brightness-90"
                />
                <div className="absolute bottom-0 w-full bg-black/50 px-4 py-3">
                  <h3 className="text-lg font-bold text-white">{item.titulo}</h3>
                  {item.nivel && <p className="text-sm">Nível: <span className="font-semibold">{item.nivel}</span></p>}
                  {item.volume && <p className="text-sm">Volume: <span className="font-semibold">{item.volume}</span></p>}
                  {item.status && <p className="text-sm">Status: <span className={`text-${item.cor}-400 font-semibold`}>{item.status}</span></p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

