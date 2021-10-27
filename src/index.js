const mysql = require('mysql');
const bodyParser = require('body-parser');
//TODO
//Agregar user y pass en .env conn string
//configurar pool connections
const uri = process.env.MYSQL_DB_URI;
const ns = process.env.DB_NAME;
const port = process.env.PORT || 8000;
//server
//sudo mysql -h 0.tcp.ngrok.to -u RaspRoot -P 17747 -D FHC_DataBase -P
const express = require('express');
const port_serv = 3200;
const routes = require('./routes');
//https://github.com/uuidjs/uuid#deep-requires-now-deprecated
const { v4: uuidv4} = require('uuid');

const dbOptionsObj = {
    host: uri,
    port: port,
    user:'RaspiRoot', 
    password: 'ASdf12#$',
    database: ns
}

let mySQLConn = mysql.createConnection(dbOptionsObj);

mySQLConn.connect(function openConnection(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log(openConnection.db);
    console.log('Connected to the MySQL server.');
    /*
    mySQLConn.query('SHOW tables', function(err, tables){ 
        console.log(tables);
    });*/

    const app_servidor = express();
    //middleware is bodyparser in app instance
    //parse incomming request as json and expose in request.body
    app_servidor.use(bodyParser.json());
    app_servidor.use(express.static(__dirname + '/views'));
    routes(app_servidor, mySQLConn);
    //server
    let server = app_servidor.listen(port_serv, () => {
        try {
            let host = server.address().address;
            let port = server.address().port;
            console.log("Servidor Express():_Escuchando en: ", host, port);
        } catch (err) {
            console.error("Hay un error al configurar server: " + err.stack);
        }
    });
});

//const client = new MongoClient(uri, mongoOptionsObj);
//DB_URI=//user:password@db.net/
    //DB_NS=sample_test
    //PORT=5000

    //[10:55 p. m., 31/7/2020] Victor Esime: user: RaspiRoot, pass: ASdf12#$
    //[10:55 p. m., 31/7/2020] Victor Esime: DB: FHC_DataBase
    //[10:56 p. m., 31/7/2020] Victor Esime: tcp://0.tcp.ngrok.io:17747


    

/*const MongoClient = require('mongodb').MongoClient;
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
});*/
