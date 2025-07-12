"use client";

import { useState } from "react";
import Image from "next/image";

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

  const [curriculo, setCurriculo] = useState<File | null>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      // Validar se é PDF
      if (file.type !== 'application/pdf') {
        alert('Por favor, selecione apenas arquivos PDF.');
        e.target.value = '';
        return;
      }
      
      // Validar tamanho (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('O arquivo deve ter no máximo 5MB.');
        e.target.value = '';
        return;
      }
      
      setCurriculo(file);
    }
  };

  const handleRemoveFile = () => {
    setCurriculo(null);
    const fileInput = document.getElementById('curriculo') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar se o currículo foi anexado
    if (!curriculo) {
      alert('Por favor, anexe seu currículo em PDF.');
      return;
    }
    
    console.log("Dados da entrevista:", formData);
    console.log("Currículo anexado:", curriculo.name, curriculo.size);
    
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-amber-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="https://static.wixstatic.com/media/5d38b4_50280ed0315f4d7ca87b5cd287b16929~mv2.png/v1/fill/w_266,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Alta%20Primavera.png"
                alt="Pão da Primavera Logo"
                width={300}
                height={125}
                className="h-16 w-auto"
                priority
              />
            </div>
            <nav className="hidden md:flex space-x-1">
              <a href="#" className="text-amber-800 hover:text-amber-600 font-semibold px-4 py-2 rounded transition-colors border-r border-amber-300">CARDÁPIO</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 font-semibold px-4 py-2 rounded transition-colors border-r border-amber-300">ENCOMENDAS</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 font-semibold px-4 py-2 rounded transition-colors border-r border-amber-300">PIZZAS</a>
              <a href="#" className="text-amber-800 hover:text-amber-600 font-semibold px-4 py-2 rounded transition-colors">CONTATO</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-20">
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
            <h2 className="text-3xl font-bold text-amber-700 mb-8 text-center">
              FORMULÁRIO PARA ENTREVISTA
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-amber-800 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="cpf" className="block text-sm font-semibold text-amber-800 mb-2">
                    CPF *
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    value={formData.cpf}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
                    placeholder="000.000.000-00"
                    maxLength={14}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-amber-800 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-amber-800 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
                    placeholder="(19) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="cargo" className="block text-sm font-semibold text-amber-800 mb-2">
                    Cargo de Interesse *
                  </label>
                  <select
                    id="cargo"
                    name="cargo"
                    required
                    value={formData.cargo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
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
                <label htmlFor="disponibilidade" className="block text-sm font-semibold text-amber-800 mb-2">
                  Disponibilidade de Horário *
                </label>
                <select
                  id="disponibilidade"
                  name="disponibilidade"
                  required
                  value={formData.disponibilidade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
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
                <label htmlFor="salario" className="block text-sm font-semibold text-amber-800 mb-2">
                  Pretensão Salarial
                </label>
                <input
                  type="text"
                  id="salario"
                  name="salario"
                  value={formData.salario}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
                  placeholder="Ex: R$ 2.000,00 ou A combinar"
                />
              </div>

              <div>
                <label htmlFor="curriculo" className="block text-sm font-semibold text-amber-800 mb-2">
                  Anexar Currículo (PDF) *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="curriculo"
                    name="curriculo"
                    accept=".pdf"
                    required
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                  />
                  {curriculo && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-800">{curriculo.name}</p>
                            <p className="text-xs text-gray-500">{Math.round(curriculo.size / 1024)} KB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="text-red-600 hover:text-red-800 font-medium text-sm"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Apenas arquivos PDF são aceitos. Tamanho máximo: 5MB.
                </p>
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  ENVIAR CANDIDATURA
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Info Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-700 mb-6">
              NOSSA HISTÓRIA
            </h3>
            <h4 className="text-xl font-semibold text-amber-800 mb-4">
              DESDE 1999
            </h4>
            <p className="text-amber-900 leading-relaxed font-medium">
              Com o crescimento do bairro Chácara Primavera, a Pão da Primavera se tornou uma das maiores 
              padarias do Brasil. Estamos sempre em busca de profissionais dedicados e apaixonados por 
              oferecer a melhor experiência aos nossos clientes. Venha fazer parte da nossa história de sucesso!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
