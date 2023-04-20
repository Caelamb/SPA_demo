// Responsabilidad que levante nuestro servidor.
const server = require("./src/app");

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`listen to PORT ${PORT}`);
});