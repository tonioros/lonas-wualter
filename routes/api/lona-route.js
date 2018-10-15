const express = require('express');
const router = express.Router();
const lona_model = require('../../model/lona-model');

router.get('/', (req, res) => {
    lona_model.selectAll((datos, isSucessful) => {
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
    lona_model.select(input, (datos, isSucessful) => {
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
        descripcion: req.body.descripcion,
        tamanio: req.body.tamanio,
    };
    lona_model.insert(input, (datos, isSucessful) => {
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
        descripcion: req.body.descripcion,
        tamanio: req.body.tamanio,
    };
    lona_model.update(input, (datos, isSucessful) => {
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
    lona_model.delete(input, (datos, isSucessful) => {
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
