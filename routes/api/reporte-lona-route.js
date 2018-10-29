const express = require('express');
const router = express.Router();
const reporte_lona_model = require('../../model/reporte-lona-model');
const multer = require('multer');
const path = require('path');
const fs = require("fs");

const handleError = (err, res) => {
    res.status(500).contentType("application/json").end(`{"upload": false}`);
};
const path_upload = path.join(__dirname, '../../public/images');
const upload = multer({
    dest: path_upload,
});

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
        lat: req.body.lat,
        lon: req.body.lon,
        agenda_id: req.body.agenda_id,
        reporte_detalle: req.body.reporte_detalle,
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

router.post("/:id/upload", upload.single("file" /* name attribute of <file> element in your form */),
    (request, res) => {
        const tempPath = request.file.path;
        const reporte_id = request.params.id;
        const targetPath = path.join(__dirname, `../../public/images/IMG_${reporte_id}_${Date.now()}.png`);
        const file_name = `/images/IMG_${reporte_id}_${Date.now()}.png`;

        if (path.extname(request.file.originalname).toLowerCase() === ".png") {
            fs.rename(tempPath, targetPath, err => {
                if (err) return handleError(err, res);
                const datos = {
                    id: reporte_id,
                    path_file: "http://"  + request.headers.host + file_name,
                };
                reporte_lona_model.upload_image(datos, (resp, err) => {
                    if (err) {
                        res.json({upload: false});
                        console.error(err);
                    } else {
                        res.json({upload: true});
                    }
                })
            });

        } else {
            fs.unlink(tempPath, err => {
                if (err) return handleError(err, res);

                res.status(403)
                    .contentType("text/plain")
                    .end("Only .png files are allowed!");
            });
        }
    }
);

module.exports = router;
