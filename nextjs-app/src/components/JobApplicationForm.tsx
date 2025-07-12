"use client";

import { useJobApplicationForm } from "@/hooks/useJobApplicationForm";

export default function JobApplicationForm() {
  const {
    formData,
    curriculo,
    handleInputChange,
    handleFileChange,
    handleRemoveFile,
    handleSubmit,
  } = useJobApplicationForm();

  return (
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
  );
}
