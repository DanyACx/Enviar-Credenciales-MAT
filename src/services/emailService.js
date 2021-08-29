const emailService = {};

const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const usuarioService = require('../services/usuarioService');

/* const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "15a3d9418c30b0",
          pass: "321f8159ee1eef"
        }
    });

    return transport;
} */

const createTrans = () => {

    const transport = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: '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'
        })
    );

    return transport;
}

emailService.enviarEmail = async (idUsuario) => {
    const transporter = createTrans();

    usuario = await usuarioService.editarUsuario(idUsuario);
    
    if(usuario){
        const info = await transporter.sendMail({
            from: '<dalmonacidcordova@gmail.com>',
            to: `${usuario.correoPersonal}`,
            subject: 'CREDENCIALES DE ACCESO AL MAT',
            html: `<p>Credenciales de acceso especial al MAT</p> <br> <p>Usuario: ${usuario.accesoEspecial}</p><p>Contraseña: ${usuario.clave} </p>`
                    
        });
    
        console.log("Message sent: %s", info.messageId);
    
        return true;
    }

    return false;
}

module.exports = emailService;