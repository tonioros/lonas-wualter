const express = require('express');
const router = express.Router();
const estado_model = require('../../model/estado-model');

router.get('/', (req, res) => {
    estado_model.selectAll((datos, isSucessful) => {
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
    estado_model.select(input, (datos, isSucessful) => {
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
        nombre_estado: req.body.nombre_estado,
        tipo_estado: req.body.tipo_estado,
    };
    estado_model.insert(input, (datos, isSucessful) => {
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
        nombre_estado: req.body.nombre_estado,
        tipo_estado: req.body.tipo_estado,
    };
    estado_model.update(input, (datos, isSucessful) => {
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
    estado_model.delete(input, (datos, isSucessful) => {
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
