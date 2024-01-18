import { Knex } from "knex";
import { ETablesNames } from "../ETablesNames";

export const seed = async (knex: Knex) => {
  const [{ count }] = await knex(ETablesNames.despesa).count<
    [{ count: number }]
  >("* as count");
  if (!Number.isInteger(count) || Number(count) > 0) return;

  const teste = [
    {
      descricao: "Conta de luz",
      valor: 150.0,
      dataVencimento: "2021-10-10",
      dataPagamento: "2021-10-10",
      categoria: "Contas",
      observacao: "Conta de luz do mês de outubro",
      pago: true,
      arquivo: null,
    },
    {
      descricao: "Conta de água",
      valor: 100.0,
      dataVencimento: "2021-10-10",
      dataPagamento: "2021-10-10",
      categoria: "Contas",
      observacao: "Conta de água do mês de outubro",
      pago: true,
      arquivo: null,
    },
    {
      descricao: "Conta de internet",
      valor: 200.0,
      dataVencimento: "2021-10-10",
      dataPagamento: "2021-10-10",
      categoria: "Contas",
      observacao: "Conta de internet do mês de outubro",
      pago: true,
      arquivo: null,
    },
    {
      descricao: "Conta de telefone",
      valor: 100.0,
      dataVencimento: "2021-10-10",
      dataPagamento: "2021-10-10",
      categoria: "Contas",
      observacao: "Conta de telefone do mês de outubro",
      pago: true,
      arquivo: null,
    },
    {
      descricao: "Conta de gás",
      valor: 100.0,
      dataVencimento: "2021-10-10",
      dataPagamento: "2021-10-10",
      categoria: "Contas",
      observacao: "Conta de gás do mês de outubro",
      pago: true,
      arquivo: null,
    },
    {
      descricao: "Conta de mercado",
      valor: 1000.0,
      dataVencimento: "2021-10-10",
      dataPagamento: "2021-10-10",
      categoria: "Contas",
      observacao: "Conta de mercado do mês de outubro",
      pago: true,
      arquivo: null,
    },
  ];

  const despesasToInsert = teste.map((despesa) => ({
    ...despesa,
    dataVencimento: new Date(despesa.dataVencimento),
    dataPagamento: new Date(despesa.dataPagamento),
  }));

  await knex(ETablesNames.despesa).insert(despesasToInsert);
};
