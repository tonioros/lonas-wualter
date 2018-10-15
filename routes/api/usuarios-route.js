const express = require('express');
const router = express.Router();
const usuario_model = require('../../model/usuario-model');

router.post('/login', (req, res) => {
    const usuario = req.body.usuario;
    const pass = req.body.pass;
    const input = {usuario, pass};

    usuario_model.login(input, (datos, isSucessful) => {
        if (isSucessful) {
            const response = {res: datos, access: true,};
            res.json(response);
        } else {
            const error = {
                res: datos,
                error_code: 1,
                access: false,
            };
            res.json(error);
        }
    })
});

module.exports = router;
