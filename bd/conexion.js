var admin=require("firebase-admin");
var keys=require("../serviceAcountKeys.json");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});
var cuenta=admin.firestore();

var conexionUsuarios=cuenta.collection("ejemploBD");
var conexionProductos=cuenta.collection("Productos");
var conexionProductos=cuenta.collection("Usuarios");
module.exports={
conexionProductos,
conexionUsuarios
};