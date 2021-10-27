//encapsular rutas definidas
//https://mariadb.com/kb/en/show-columns/
//TODO: porque no se puede usar uuid desde parent scope?
const { v4: uuidv4} = require('uuid');
module.exports = function (app, db) {

    //reg exp url
    app.get('/secret/', function (_req, res, next) {
        //res.send('secret Poems section');
        //FINAL
        res.format({
            html: function () {
                res.send('<p>Secrtet Poems Directory : 𐤏𐤔𐤕𐤓𐤕 𐤌𐤋𐤊 </p>')
            }
        }),
            next(console.log("uh??"));
    })

    app.get('/tablaskio/', async (_req, res, _next) => {
        console.log("Entro una solicitud desde http://localhost:3200/tablaskio");
        
        const queryScript = `SHOW TABLES`;

        db.query(queryScript, (err, results, _fields) => { 
            if ( err ){
                res.status(400).send('Error in database operation');
            } else {
                res.send(results);
            }
        });
    })

    app.get('/perfiles/', async (_req, res, _next) => {
        console.log("Entro una solicitud desde http://localhost:3200/perfiles");
        
        const queryScript = `SELECT * FROM Tbl_DeviceGeneralInfo`;

        db.query(queryScript, (err, results, _fields) => { 
            if ( err ){
                res.status(400).send('Error in database operation');
            } else {
                res.send(results);
            }
        });
    })

    app.get('/getorderbyid/:orderid', async (req, res, _next) => {
        console.log(req.params);
        console.log(req.body);
        console.log("Entro una solicitud desde http://localhost:3200/getorderbyid");
       
        //let idVar = ["e8fc2f7d-78f4-455f-abd9-b65bb7c2b1b9"];
        let idVar = req.params.orderid;
        const queryScript = `SELECT * FROM Tbl_GeneralOrders
        WHERE IdOrder = ?`;

        db.query(queryScript, idVar, (err, results, _fields) => { 
            if ( err ){
                res.status(400).send('Error in database operation');
            } else {
                res.send(results);
            }
        });
    })

    app.get('/getallordersbyuser/:userid', async (req, res, _next) => {
        console.log(req.params);
        console.log("Entro una solicitud desde http://localhost:3200/getallordersbyuser");
       
        //let idVar = ["e8fc2f7d-78f4-455f-abd9-b65bb7c2b1b9"];
        let idUser = req.params.userid;
        const queryScript = `SELECT * FROM Tbl_GeneralOrders
        WHERE IdDev = ?`;

        db.query(queryScript, idUser, (err, results, _fields) => { 
            if ( err ){
                res.status(400).send('Error in database operation');
            } else {
                res.send(results);
            }
        });
    })

    app.get('/getallforecastingresultsbyorderid/:orderid', async (req, res, _next) => {
        console.log(req.params);
        console.log("Entro una solicitud desde http://localhost:3200/getallforecastingresultsbyorderid");
       
        //let idVar = ["e8fc2f7d-78f4-455f-abd9-b65bb7c2b1b9"];
        let idOrder = req.params.orderid;
        const queryScript = `SELECT * FROM Tbl_ForecastingResults
        WHERE IdOrder = ?`;

        db.query(queryScript, idOrder, (err, results, _fields) => { 
            if ( err ){
                res.status(400).send('Error in database operation');
            } else {
                res.send(results);
            }
        });
    })

    //app.post('/createneworder/', async (req, res, next) => {
    app.get('/createneworder/', async (req, res, next) => {
        /*
        console.log(req.body);
        res.send("empty reply");
        return;*/
        ///createneworder/:orderid
        console.log("Entro una solicitud desde http://localhost:3200/createneworder/");
        //IdDev : Marco001, Edgar001, Jesua001, Joshua001
        let insertParams = {
            IdOrder :uuidv4(),
            //de form http/kio
            IdDev:"Jesua001",
            OrderName:"PruebaJesua",
            OrderStatus:"KIO DB",
            PeriodFormat:"DROP ALL",
            Delay:10,
            MaxForecastingSteps:100,
            KeepModel:01,
            IsUnivariate:02,
            CreationTime:jsToSQLDate(),
            StartDate:jsToSQLDate()
        }
        console.log(insertParams);
        
        const queryScript =`INSERT INTO Tbl_GeneralOrders 
        (IdOrder, IdDev, OrderName, OrderStatus, PeriodFormat, Delay, MaxForecastingSteps, KeepModel, IsUnivariate, CreationTime, StartDate) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
        db.query(queryScript, Object.values(insertParams), (err, results, _fields) => { 
            if ( err ){
                console.log(err);
                res.status(400).send('Error in database operation');
            } else {
                //TODO: mensaje topico MQTT
                res.send(results);
            }
        });
    })

    app.get(/count/, async (_req, res, next) => {
        console.log("Entro una solicitud desde http://localhost:3200/count");

        const collection = db.collection("poblacionMX");
        const countDocuments = await collection.countDocuments();

        //ya no acepta mas conexiones send
        res.send('Browser Canvas via Express:Document Count is: ' + countDocuments);
        //espress docs: cerrar conexion
        next(console.log("express dice: bye!"));
    })
    //convertir JS en date SQL insert
    //https://stackoverflow.com/questions/20083807/javascript-date-to-sql-date-object
    function jsToSQLDate(){
        var pad = function(num) { return ('00'+num).slice(-2) };
        var date;
        date = new Date();
        date = date.getUTCFullYear()        + '-' +
                pad(date.getUTCMonth() + 1) + '-' +
                pad(date.getUTCDate())       + ' ' +
                pad(date.getUTCHours())      + ':' +
                pad(date.getUTCMinutes())    + ':' +
                pad(date.getUTCSeconds())
        return date;    
    }
}