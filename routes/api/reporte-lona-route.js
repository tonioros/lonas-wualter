const express = require('express');
const router = express.Router();
const reporte_lona_model = require('../../model/reporte-lona-model');

router.get('/', (req, res) => {
    reporte_lona_model.selectAll((datos, isSucessful) => {
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
    reporte_lona_model.select(input, (datos, isSucessful) => {
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

router.get('/agencia/:agencia_id', (req, res) => {
    const input = {agencia_id: req.params.agencia_id};
    reporte_lona_model.selectByAgencia(input, (datos, isSucessful) => {
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


router.get('/lona/:lona_id', (req, res) => {
    const input = {lona_id: req.params.lona_id};
    reporte_lona_model.selectByAgencia(input, (datos, isSucessful) => {
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
        lona_id: req.body.lona_id,
        observaciones: req.body.observaciones,
        file_path: req.body.file_path,
        lat: req.body.lat,
        lon: req.body.lon,
        agenda_id: req.body.agenda_id
    };

    reporte_lona_model.insert(input, (datos, isSucessful) => {
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
