ctrl = {};

const usuarioService = require('../services/usuarioService');
const respuestaModel = require('../models/RespuestaModel');
var mongoose = require('mongoose');

ctrl.crearUsuario = async (req, res) => {
    let respuesta = new respuestaModel();

    try {
            if(await usuarioService.crearUsuario(req.body)){
                respuesta.mensaje = "Usuario creado";
                respuesta.status = 200;
            }else{
                respuesta.mensaje = "Error en el usuario";
                respuesta.status = 400;
            }
    } catch (error) {
        console.log(error);
        respuesta.mensaje = "Ocurrio un error en el servidro";
        respuesta.status = 500;
    }
    res.status(respuesta.status).json(respuesta);
}

ctrl.obtenerUsuarios = async (req, res) => {
    try {
            let obtenerUsuarios = await usuarioService.obtenerUsuarios();
            //res.status(200).json({data: obtenerUsuarios});
            data = JSON.stringify(obtenerUsuarios);
            //res.render('index', {data: obtenerUsuarios});
            res.send(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'Error en el Servidor'})
    }
}

ctrl.obtenerUsuarioPorID = async (req, res) => {
    let data = await usuarioService.obtenerUsuarioPorID(req.params.id);
    console.log(data);
    if(data){
        res.status(200).json(data);
    }else{
        res.status(500).json({mensaje: 'Error en el Servidor'});
    }
}

ctrl.eliminarUsuario = async (req, res) => {
    try {
            let eliminar = await usuarioService.eliminarUsuario(req.params.id);

            if(eliminar){
                res.status(200).json({mensaje: "Usuario Eliminado"});
            }
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: "Ocurrio un error en el Servidor"});
    }
}

ctrl.actualizarUsuario = async (req, res) => {
    try {
            let resActualizar = await usuarioService.actualizarUsuario(req.body);
            if(resActualizar){
                //res.status(200).json({mensaje: "Se actualizó usuario"});
                res.redirect('/');    
            }
    } catch (error) {
        console.error();
        res.status(500).json({mensaje: "Ocurrio un error en el Servidor"})
    }
}

// RUTA PARA EDITAR UN REGISTRO SELECCIONADO
ctrl.editarUsuario = async (req, res) => {
    try {
            let userObtenido = await usuarioService.editarUsuario(req.params.idUsuario);
            
            if(userObtenido){
                //res.status(200).json({mensaje: "Se actualizó usuario"});
                res.render('editar', {usuario: userObtenido});    
            }
    } catch (error) {
        console.error();
        res.status(500).json({mensaje: "Ocurrio un error en el Servidor"})
    }
}

module.exports = ctrl;