export interface IDespesa {
  id: number;
  descricao: string;
  valor: number;
  vencimento: string;
  pagamento: string;
  categoria: string;
  observacao: string;
  pago: boolean;
}
