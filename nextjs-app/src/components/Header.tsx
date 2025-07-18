import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-lg border-b-2 border-amber-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="https://paodaprimavera.com.br" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://static.wixstatic.com/media/5d38b4_50280ed0315f4d7ca87b5cd287b16929~mv2.png/v1/fill/w_266,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Alta%20Primavera.png"
                alt="Pão da Primavera Logo"
                width={300}
                height={125}
                className="h-16 w-auto"
                priority
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-1">
            <a href="https://www.paodaprimavera.com.br/card%C3%A1pio-sal%C3%A3o" className="text-amber-800 hover:text-amber-600 font-semibold px-4 py-2 rounded transition-colors border-r border-amber-300">CARDÁPIO</a>
            <a href="https://www.paodaprimavera.com.br/c%C3%B3pia-card%C3%A1pio-encomendas" className="text-amber-800 hover:text-amber-600 font-semibold px-4 py-2 rounded transition-colors border-r border-amber-300">ENCOMENDAS</a>
            <a href="https://www.paodaprimavera.com.br/cardapio-pizza" className="text-amber-800 hover:text-amber-600 font-semibold px-4 py-2 rounded transition-colors border-r border-amber-300">PIZZAS</a>
            <a href="https://www.paodaprimavera.com.br/" className="text-amber-800 hover:text-amber-600 font-semibold px-4 py-2 rounded transition-colors">CONTATO</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
