const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_DB_URI;
const ns = process.env.MDB_NS;
const port = process.env.PORT || 8000;
//server
const express = require('express');
const port_serv = 3200;
const routes = require('./routes');

const mongoOptionsObj = {
    poolSize: 50,
    ssl: true,
    w: "majority",
    wtimeout: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const client = new MongoClient(uri, mongoOptionsObj);

console.log("Mongo Cluster dice : Bienvenido al cluster mongoDB.")
client.connect().then(async conexionAbierta => {
    // perform actions on the collection object
    console.log("Mongo Cluster dice : Ya esta lista tu conexion");
    const app_servidor = express();
    const cdb = conexionAbierta.db(process.env.MDB_NS);
    app_servidor.use(express.static(__dirname + '/views'));
    routes(app_servidor, cdb);
    //server
    let server = app_servidor.listen(port_serv, () => {
        try {
            let host = server.address().address;
            let port = server.address().port;
            console.log("Servidor Express():_Escuchando en: ", host, port);
        } catch (err) {
            console.error("Hay un error al configurar server: " + err.stack);
        }
    })

}).catch(err => { // atrapa los errores con la funcion err
    console.error(err.stack)
    process.exit(1);
});
