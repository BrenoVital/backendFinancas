import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getById from "./GetById";
import * as getByIdValidation from "./GetById";
import * as deleteById from "./DeleteById";
import * as updateById from "./UpdateById";

export const DespesasController = {
  ...create,
  ...getAll,
  ...getById,
  ...getByIdValidation,
  ...deleteById,
  ...updateById,
};
