const express = require("express");
const router = express.Router();

const usuario = require('../controllers/usuarioController');

module.exports = app => {

    /* router.get('/', (req, res) => {
        res.send('GO SERVER')
    
    })  */

    router.get('/', (req, res) => {
        res.render('index')
    
    });

    router.post('/crearUsuario', usuario.crearUsuario);
    router.get('/obtenerUsuarios', usuario.obtenerUsuarios);
    router.get('/obtenerUsuarioID/:id', usuario.obtenerUsuarioPorID)
    router.delete('/eliminarUsuario/:id', usuario.eliminarUsuario);
    router.post('/actualizarUsuario', usuario.actualizarUsuario);
    router.get('/editarUsuario/:idUsuario', usuario.editarUsuario);

    app.use(router);
}