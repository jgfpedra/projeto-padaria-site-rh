export default function Footer() {
  return (
    <footer className="bg-amber-800 text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-amber-100">PÃO DA PRIMAVERA</h4>
            <p className="mb-2 text-sm leading-relaxed text-amber-200">PANIFICADORA PAO DA PRIMAVERA LTDA</p>
            <p className="text-sm text-amber-200">CNPJ - 00.144.516/0002-90</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-amber-100">CONTATO</h4>
            <p className="mb-2 text-sm leading-relaxed text-amber-200">R. Jorge de Figueiredo Corrêa, 1411</p>
            <p className="mb-2 text-sm leading-relaxed text-amber-200">Chácara Primavera | Campinas SP</p>
            <p className="mb-2 text-sm leading-relaxed text-amber-200">(19) 3256 6333</p>
            <p className="text-sm text-amber-200">WhatsApp: (19) 99790-7854</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-amber-100">SIGA A GENTE</h4>
            <div className="space-y-2 flex flex-col items-center">
              <a href="#" className="text-sm hover:text-amber-200 transition-colors duration-200 text-amber-200">Instagram</a>
              <a href="#" className="text-sm hover:text-amber-200 transition-colors duration-200 text-amber-200">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-600 mt-10 pt-6 text-center">
          <p className="text-sm text-amber-200">&copy; 2024 Pão da Primavera. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
