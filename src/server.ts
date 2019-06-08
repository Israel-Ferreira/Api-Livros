import App from './App';

const {app} = App;

const PORT = process.env.PORT || 6930;

app.listen(PORT, () => {
    console.log(`Server is Started on Port ${PORT}`)
});


process.on("SIGUSR2", () => {
    App.stopConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2'));
});

process.on("SIGINT", () => {
    App.stopConnection('A Conexão foi interrompida', () => process.exit(0));
})