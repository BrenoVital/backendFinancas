import { IDespesa } from "../../../models";

declare module "knex/types/tables" {
  interface Tables {
    despesas: IDespesa;
    // faturamento: IFaturamento;
    // usuario: IUsuario;
  }
}