const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: "bw7rsufkcysrqfabfv2h-mysql.services.clever-cloud.com",
  user: "u2jtkmzdlglpp6wv",
  password: "xBOar22O965DdOpYCpYn",
  database: "bw7rsufkcysrqfabfv2h"
});

conexion.connect(function(err) {
  if (err) throw console.log("Connection failed") + err;
  console.log("Connected!");
});


module.exports = conexion;