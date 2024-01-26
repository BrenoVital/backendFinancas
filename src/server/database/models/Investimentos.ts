export interface IInvestimentos {
  id: number;
  descricao: string;
  valor: number;
  quantidade: number;
  acao: string;
  categoria: number;
  dividendo: number;
  dataCompra: string;
  dataVenda?: string;
}
