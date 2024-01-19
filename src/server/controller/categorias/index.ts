import * as create from "./Create";
import * as getById from "./GetById";
import * as getByIdValidation from "./GetById";
import * as deleteById from "./DeleteById";
import * as updateById from "./UpdateById";
import * as getAll from "./GetAll";

export const CategoriasController = {
  ...create,
  ...getAll,
  ...getById,
  ...getByIdValidation,
  ...deleteById,
  ...updateById,
};
