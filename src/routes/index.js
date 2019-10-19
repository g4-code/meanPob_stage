//encapsular rutas definidas
module.exports = function (app, db) {

    //reg exp url
    app.get(/secret/, function (req, res, next) {
        //res.send('secret Poems section');
        //FINAL
        res.format({
            html: function () {
                res.send('<p>Secrtet Poems Directory : 𐤏𐤔𐤕𐤓𐤕 𐤌𐤋𐤊 </p>')
            }
        }),
            next(console.log("uh??"));
    })

    app.get(/count/, async (req, res, next) => {
        console.log("Entro una solicitud desde http://localhost:3200/count");

        const collection = db.collection("poblacionMX");
        const countDocuments = await collection.countDocuments();

        //ya no acepta mas conexiones send
        res.send('Browser Canvas via Express:Document Count is: ' + countDocuments);
        //espress docs: cerrar conexion
        next(console.log("express dice: bye!"));
    })

    app.get(/poblacion/, async (req, res, next) => {
        console.log("Entro una solicitud desde http://localhost:3000/alpha");
        //aqui damos al otro cliente docdocumets
        //ya no acepta mas conexiones send
        //res.send('Browser Canvas via Express:Document Count is: ' + dbCount);
        //mas encp: attahcments, downloads, html
        req.accepts(['html', 'json'])
        try {
            const coll = await db.collection("poblacionMX").find({}).project({ indicador: 1, periodo: 1, nombre: 1, valor: 1, _id: 0 }).toArray()
            let response = {
                res: coll
            }
            console.log(response.res);
            res.json(response);
            //espress docs: cerrar conexion
            next(console.log("express dice: bye!"));
        } catch (err) {
            console.error("Hay un problema al cargar la coleccion de poblacion" + err);
        }
    })
}