const express = require('express');
const router = express.Router();
const agencia_model = require('../../model/agencia-model');

router.get('/', (req, res) => {
    agencia_model.selectAll((datos, isSucessful) => {
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

router.get('/:id', (req, res) => {
    const input = {id: req.params.id};
    agencia_model.select(input, (datos, isSucessful) => {
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

router.post('/', (req, res) => {
    const input = {
        nombre_agencia: req.body.nombre_agencia,
        tipo_agencia: req.body.tipo_agencia,
    };
    agencia_model.insert(input, (datos, isSucessful) => {
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

router.put('/:id', (req, res) => {
    const input = {
        id: req.params.id,
        nombre_agencia: req.body.nombre_agencia,
        tipo_agencia: req.body.tipo_agencia,
    };
    agencia_model.update(input, (datos, isSucessful) => {
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

router.delete('/:id', (req, res) => {
    const input = {id: req.params.id};
    agencia_model.delete(input, (datos, isSucessful) => {
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
