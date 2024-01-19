export interface IDespesa {
  id: number;
  descricao: string;
  valor: number;
  vencimento: string;
  pagamento: string;
  categoria_id: number;
  observacao: string;
  pago: boolean;
}
