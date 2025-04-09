import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold mb-6">Bem-vindo à NexuSense IoT</h1>

      {/* Botão de WhatsApp */}
      <a
        href="https://wa.me/5568996055488"
        target="_blank"
        className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Fale conosco no WhatsApp
      </a>

      {/* Aqui entra o Dashboard ThingsBoard */}
      <Dashboard />
    </main>
  );
}
