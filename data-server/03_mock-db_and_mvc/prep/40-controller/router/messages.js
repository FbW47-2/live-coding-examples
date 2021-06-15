
import express from 'express';
import controllerMessages from '../controller/messages.js';

const router = express.Router();

router.get('/:id', controllerMessages.getById);

router.post('/', controllerMessages.create);

export default router;
