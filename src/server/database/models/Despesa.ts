export interface IDespesa {
  id: number;
  descricao: string;
  valor: number;
  vencimento: string;
  pagamento: string;
  categoriaId: string;
  observacao: string;
  pago: boolean;
}
