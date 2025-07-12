export interface FormData {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  cargo: string;
  experiencia: string;
  disponibilidade: string;
  motivacao: string;
  salario: string;
}

export interface FileUploadState {
  file: File | null;
  isValid: boolean;
  error?: string;
}
