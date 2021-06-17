import express from 'express';
import controllerMessages from '../controller/messages.js';

const router = express.Router();

// http://localhost:3000/messages/1
// http://localhost:3000/messages/2
router.get('/:id', controllerMessages.getById);

router.post('/', controllerMessages.create);

export default router;
