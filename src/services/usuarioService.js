const usuarioService = {};
var mongoose = require('mongoose');
const Usuario = require('../models/Usuario');

usuarioService.crearUsuario = async (CrearUsuarioModel) => {

    const newUsuario = new Usuario({
        tipoDocumento: CrearUsuarioModel.tipoDocumento,
        numDocumento: CrearUsuarioModel.numDocumento,
        nombres: CrearUsuarioModel.nombres,
        apellidoPat: CrearUsuarioModel.apellidoPat,
        apellidoMat: CrearUsuarioModel.apellidoMat,
        sexo: CrearUsuarioModel.sexo,
        codAlumno: CrearUsuarioModel.codAlumno,
        facultad: CrearUsuarioModel.facultad,
        situacion: CrearUsuarioModel.situacion,
        correoPersonal: CrearUsuarioModel.correoPersonal,
        correoIns: CrearUsuarioModel.correoIns,
        accesoEspecial: CrearUsuarioModel.accesoEspecial,
        clave: CrearUsuarioModel.clave,
        estado: CrearUsuarioModel.estado
    });

    await newUsuario.save();
    return true;
}

usuarioService.obtenerUsuarios = async () => {
    return await Usuario.find({});
}

usuarioService.obtenerUsuarioPorID = async (idUsuario) => {
    try{
        let usuario = await Usuario.findById({"_id": idUsuario});

        return usuario;
    }catch(error){
        return null;
    }
}

usuarioService.eliminarUsuario = async (idUsuario) => {
    let id = mongoose.Types.ObjectId(idUsuario);
    const usuario = await Usuario.findByIdAndDelete(id);

    if(usuario){
        return true;
    }else{
        return false;
    }
}

usuarioService.actualizarUsuario = async (ActualizarUsuarioModel) => {

    var id = mongoose.Types.ObjectId(ActualizarUsuarioModel.id);
    const usuario = await Usuario.findByIdAndUpdate(id, {
        tipoDocumento: ActualizarUsuarioModel.tipoDocumento,
        numDocumento: ActualizarUsuarioModel.numDocumento,
        nombres: ActualizarUsuarioModel.nombres,
        apellidoPat: ActualizarUsuarioModel.apellidoPat,
        apellidoMat: ActualizarUsuarioModel.apellidoMat,
        sexo: ActualizarUsuarioModel.sexo,
        codAlumno: ActualizarUsuarioModel.codAlumno,
        facultad: ActualizarUsuarioModel.facultad,
        situacion: ActualizarUsuarioModel.situacion,
        correoPersonal: ActualizarUsuarioModel.correoPersonal,
        correoIns: ActualizarUsuarioModel.correoIns,
        accesoEspecial: ActualizarUsuarioModel.accesoEspecial,
        clave: ActualizarUsuarioModel.clave,
        estado: ActualizarUsuarioModel.estado
    });

    if(usuario){
        return true;
    }else{
        return false;
    }
}

usuarioService.editarUsuario = async (idUsuario) => {

    let id = mongoose.Types.ObjectId(idUsuario);
    
    try{
        let usuario = await Usuario.findById(id);
       
        return usuario;
    }catch(error){
        return null;
    }
}

module.exports = usuarioService;