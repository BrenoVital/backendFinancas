import { Knex } from "./server/database/knex";
import server from "./server/server";

server.listen(process.env.PORT, () => {
  console.log(`App rodando na porta ${process.env.PORT}`);
});

const startServer = () => {
  server.listen(process.env.PORT || 3333, () => {
    console.log(`App rodando na porta ${process.env.PORT}`);
  });
};

if (process.env.IS_LOCALHOST !== "true") {
  console.log("Rodando migrations...");

  Knex.migrate
    .latest()
    .then(() => startServer())
    .catch(console.error)
    .catch(console.error);
} else {
  startServer();
}
