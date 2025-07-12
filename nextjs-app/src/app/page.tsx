"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    cargo: "",
    experiencia: "",
    disponibilidade: "",
    motivacao: "",
    salario: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Formatação automática do CPF
    if (name === 'cpf') {
      const cpfValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
      let formattedCpf = cpfValue;
      
      if (cpfValue.length >= 4) {
        formattedCpf = cpfValue.slice(0, 3) + '.' + cpfValue.slice(3);
      }
      if (cpfValue.length >= 7) {
        formattedCpf = cpfValue.slice(0, 3) + '.' + cpfValue.slice(3, 6) + '.' + cpfValue.slice(6);
      }
      if (cpfValue.length >= 10) {
        formattedCpf = cpfValue.slice(0, 3) + '.' + cpfValue.slice(3, 6) + '.' + cpfValue.slice(6, 9) + '-' + cpfValue.slice(9, 11);
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedCpf
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados da entrevista:", formData);
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 text-gray-800">
      {/* Header */}
      <header className="bg-orange-600 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-white text-3xl font-bold tracking-wide">
                PÃO DA PRIMAVERA
              </div>
            </div>
            <nav className="hidden md:flex space-x-1">
              <a href="#" className="text-white hover:text-orange-200 font-medium px-4 py-2 rounded transition-colors border-r border-orange-500">CARDÁPIO</a>
              <a href="#" className="text-white hover:text-orange-200 font-medium px-4 py-2 rounded transition-colors border-r border-orange-500">ENCOMENDAS</a>
              <a href="#" className="text-white hover:text-orange-200 font-medium px-4 py-2 rounded transition-colors border-r border-orange-500">PIZZAS</a>
              <a href="#" className="text-white hover:text-orange-200 font-medium px-4 py-2 rounded transition-colors">CONTATO</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            TRABALHE CONOSCO
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faça parte da nossa equipe! Preencha o formulário abaixo e venha crescer junto com a Pão da Primavera.
          </p>
        </div>
      </section>

      {/* Main Content - Interview Form */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
              FORMULÁRIO PARA ENTREVISTA
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-800 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="cpf" className="block text-sm font-semibold text-gray-800 mb-2">
                    CPF *
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    value={formData.cpf}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                    placeholder="000.000.000-00"
                    maxLength={14}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-800 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                    placeholder="(19) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="cargo" className="block text-sm font-semibold text-gray-800 mb-2">
                    Cargo de Interesse *
                  </label>
                  <select
                    id="cargo"
                    name="cargo"
                    required
                    value={formData.cargo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  >
                    <option value="">Selecione o cargo</option>
                    <option value="padeiro">Padeiro</option>
                    <option value="confeiteiro">Confeiteiro</option>
                    <option value="atendente">Atendente</option>
                    <option value="caixa">Operador de Caixa</option>
                    <option value="pizzaiolo">Pizzaiolo</option>
                    <option value="auxiliar-cozinha">Auxiliar de Cozinha</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="gerente">Gerente</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experiencia" className="block text-sm font-semibold text-gray-800 mb-2">
                  Experiência Profissional *
                </label>
                <textarea
                  id="experiencia"
                  name="experiencia"
                  required
                  rows={4}
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  placeholder="Descreva sua experiência profissional relevante para a vaga..."
                />
              </div>

              <div>
                <label htmlFor="disponibilidade" className="block text-sm font-semibold text-gray-800 mb-2">
                  Disponibilidade de Horário *
                </label>
                <select
                  id="disponibilidade"
                  name="disponibilidade"
                  required
                  value={formData.disponibilidade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                >
                  <option value="">Selecione sua disponibilidade</option>
                  <option value="manha">Manhã (6h às 14h)</option>
                  <option value="tarde">Tarde (14h às 22h)</option>
                  <option value="noite">Noite (22h às 6h)</option>
                  <option value="integral">Horário Integral</option>
                  <option value="meio-periodo">Meio Período</option>
                  <option value="fins-semana">Fins de Semana</option>
                  <option value="flexivel">Flexível</option>
                </select>
              </div>

              <div>
                <label htmlFor="motivacao" className="block text-sm font-semibold text-gray-800 mb-2">
                  Por que deseja trabalhar na Pão da Primavera? *
                </label>
                <textarea
                  id="motivacao"
                  name="motivacao"
                  required
                  rows={4}
                  value={formData.motivacao}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  placeholder="Conte-nos sua motivação para fazer parte da nossa equipe..."
                />
              </div>

              <div>
                <label htmlFor="salario" className="block text-sm font-semibold text-gray-800 mb-2">
                  Pretensão Salarial
                </label>
                <input
                  type="text"
                  id="salario"
                  name="salario"
                  value={formData.salario}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  placeholder="Ex: R$ 2.000,00 ou A combinar"
                />
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  ENVIAR CANDIDATURA
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Info Section */}
      <section className="bg-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-orange-600 mb-6">
              NOSSA HISTÓRIA
            </h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              DESDE 1999
            </h4>
            <p className="text-gray-700 leading-relaxed font-medium">
              Com o crescimento do bairro Chácara Primavera, a Pão da Primavera se tornou uma das maiores 
              padarias do Brasil. Estamos sempre em busca de profissionais dedicados e apaixonados por 
              oferecer a melhor experiência aos nossos clientes. Venha fazer parte da nossa história de sucesso!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">PÃO DA PRIMAVERA</h4>
              <p className="mb-2">PANIFICADORA PAO DA PRIMAVERA LTDA</p>
              <p className="mb-2">CNPJ - 00.144.516/0002-90</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">CONTATO</h4>
              <p className="mb-2">R. Jorge de Figueiredo Corrêa, 1411</p>
              <p className="mb-2">Chácara Primavera | Campinas SP</p>
              <p className="mb-2">(19) 3256 6333</p>
              <p className="mb-2">WhatsApp: (19) 99790-7854</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">SIGA A GENTE</h4>
              <div className="space-y-2">
                <a href="#" className="block hover:text-orange-200">Instagram</a>
                <a href="#" className="block hover:text-orange-200">Facebook</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-orange-500 mt-8 pt-8 text-center">
            <p>&copy;2024 Pão da Primavera. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
