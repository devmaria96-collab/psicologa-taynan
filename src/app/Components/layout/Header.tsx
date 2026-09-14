export default function Header() {
  return (
    <header className="w-full px-6 py-6 md:px-16">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between">
        <a
          href="#inicio"
          className="font-serif text-lg text-[#3D3A38]"
        >
          TAYNAN AZEVEDO
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm tracking-wide text-[#3D3A38] transition hover:opacity-60"
          >
            Início
          </a>

          <a
            href="#sobre"
            className="text-sm tracking-wide text-[#3D3A38] transition hover:opacity-60"
          >
            Sobre mim
          </a>

          <a
            href="#atendimento"
            className="text-sm tracking-wide text-[#3D3A38] transition hover:opacity-60"
          >
            Atendimentos
          </a>

          <a
            href="#abordagem"
            className="text-sm tracking-wide text-[#3D3A38] transition hover:opacity-60"
          >
            Abordagem
          </a>

          <a
            href="#contato"
            className="text-sm tracking-wide text-[#3D3A38] transition hover:opacity-60"
          >
            Contato
          </a>

          <a
            href="#agendar"
            className="rounded-full bg-[#3D3A38] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2D2A28]"
          >
            Agendar consulta
          </a>
        </div>
      </nav>
    </header>
  );
}