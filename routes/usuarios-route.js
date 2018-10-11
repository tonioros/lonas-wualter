var express = require('express');
var router = express.Router();
var usuario_model = require('../model/usuario-model');


router.post('/login', (req, res) => {
    let usuario = req.body.usuario;
    let pass = req.body.pass;
    usuario_model.login([usuario, pass], (datos, isSucessful) => {
        if (isSucessful) {
            res.json(datos);
        } else  {
            var error = {
                mensaje: datos,
                error_code: 1,
            };
            res.json(error);
        }
    })
});

module.exports = router;
