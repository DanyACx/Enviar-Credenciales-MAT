const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({

    tipoDocumento: String,
    numDocumento: String,
    nombres: String,
    apellidoPat: String,
    apellidoMat: String,
    sexo: String,
    codAlumno: String,
    facultad: String,
    situacion: String,
    correoPersonal: String,
    correoIns: String,
    accesoEspecial: String,
    clave: String,
    estado: String
});

module.exports = mongoose.model('usuario', usuarioSchema);