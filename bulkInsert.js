//inicio...
//insertar coleccion poblacion 1990-2013 mx
//en tu cluster atlas mongoDB
const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId
const MongoError = require("mongodb").MongoError

    /**
     * Refer to http://mongodb.github.io/node-mongodb-native/3.1/tutorials/crud/#bulkwrite
     */

    // This leading semicolon (;) is to make this Immediately Invoked Function Expression (IIFE).
    // To read more about this type of expression, refer to https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    ; (async () => {
        try {
            //ensure you update your host information below!
            //el host lo configuras desde Atlas UI
            //configura un usuario y una contraseña 
            //para la base de datos sample_collections
            //despues reemplaza tu user y tu pass en la linea 24
            //puede que el query string cambie...you can do this!!!
            //const host = "mongodb+srv://g4student:g4student@hmaaa.mongodb.net/test?retryWrites=true&w=majority";
            const host = "mongodb://poblacionUser:poblacionUser@cluster0-shard-00-00-hmaaa.mongodb.net:27017,cluster0-shard-00-01-hmaaa.mongodb.net:27017,cluster0-shard-00-02-hmaaa.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
            const client = await MongoClient.connect(
                host,
                { retryWrites: true },
                { useNewUrlParser: true },
                { useUnifiedTopology: true },
            )
            const sample_collections = client.db("sample_collections")
            //https://www.inegi.org.mx/programas/intercensal/2015/
            const docsArray = [{
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "87064847",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1990"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "88630941",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1991"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "90132585",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1992"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "91600655",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1993"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "93055300",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1994"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "94490336",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1995"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "95876664",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1996"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "97204604",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1997"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "98485424",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1998"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "99706067",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "1999"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "100895811",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2000"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "102122295",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2001"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "103417944",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2002"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "104719891",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2003"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "105951569",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2004"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "107151011",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2005"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "108408827",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2006"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "109787388",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2007"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "111299015",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2008"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "112852594",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2009"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "114255555.44904",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2010"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "115682867.70445",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2011"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "117053749.70032",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2012"
                }
            },
            {
                insertOne: {
                    "indicador": 6300000266,
                    "nombre": "Población a mitad de año",
                    "unidad": "Número de personas",
                    "valor": "118395053.83858",
                    "fuente": "CONAPO. Consejo Nacional de Población. Proyecciones de la población de México 2010-2050 y estimaciones 1990-2010.",
                    "periodo": "2013"
                }
            }]

            const bulkWriteResponse2 = await sample_collections.collection("poblacionMX").bulkWrite(docsArray)
            //si todo salio bien veras el siguiente mensaje en la consola
            //con le numero de docs insertados: 24
            console.log("Numero de Docs Insertados:_" + bulkWriteResponse2.nInserted);
            console.log(
                "\x1b[32m",
                `...`,
                `___`,
            )
            client.close()
            process.exit(0)
        } catch (e) {
            if (
                e instanceof MongoError &&
                e.message.slice(0, "Invalid Operation".length) === "Invalid Operation"
            ) {
                console.log("\x1b[32m", "No documents to update")
            } else {
                console.error("\x1b[31m", `Error during migration, ${e}`)
            }
            process.exit(1)
        }
    })()
