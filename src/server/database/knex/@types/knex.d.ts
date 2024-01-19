import { IDespesa, IRenda, ICategoria, IUsuario } from "../../models";

declare module "knex/types/tables" {
  interface Tables {
    despesas: IDespesa;
    faturamento: IRenda;
    categoria: ICategoria;
    usuario: IUsuario;
  }
}
