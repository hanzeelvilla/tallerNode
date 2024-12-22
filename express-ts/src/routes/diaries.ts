import { Router } from "express";

const router = Router();

router.get('/', (_req, res) => {
    res.send('Buscando diarios');
})

router.post('/', (_req, res) => {
    res.send('Creando un diario');
})

export default router;