"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const { app } = App_1.default;
const PORT = process.env.PORT || 6930;
app.listen(PORT, () => {
    console.log(`Server is Started on Port ${PORT}`);
});
process.on("SIGUSR2", () => {
    App_1.default.stopConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2'));
});
process.on("SIGINT", () => {
    App_1.default.stopConnection('A Conexão foi interrompida', () => process.exit(0));
});
