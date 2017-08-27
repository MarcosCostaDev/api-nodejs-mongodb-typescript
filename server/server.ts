import App from "./app";

App.app.listen(3000, () => console.log("Servidor esta rodando na porta 3000"));

process.once("SIGUSR2", () => App.closeDataBaseConnection("nodemon restart", () => process.kill(process.pid, "SIGUSR2")));
process.on("SIGINT", () => App.closeDataBaseConnection("execução foi interrompida", () => process.exit(0)));
