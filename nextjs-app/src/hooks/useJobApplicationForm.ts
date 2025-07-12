"use client";

import { useState } from "react";
import { FormData } from "@/types/form";

export const useJobApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Formatação automática do CPF
    if (name === 'cpf') {
      const cpfValue = value.replace(/\D/g, '');
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

  return {
    formData,
    curriculo,
    handleInputChange,
    handleFileChange,
    handleRemoveFile,
    handleSubmit,
  };
};
