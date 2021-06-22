
import express from 'express';
import { check, validationResult } from 'express-validator';
import controllerMessages from '../controller/messages.js';

const router = express.Router();

router.get('/:id', controllerMessages.getById);

router.post(
    '/',
        check('id').isNumeric(),
        check('contact', 'optional contact email address').optional().isEmail(),
        check('text').escape(),
        check(['text', 'title']).isString(),
        check(['text', 'title']).not().contains("<").withMessage('no "<" allowed'),
        check(['text', 'title']).not().contains(">").withMessage('no ">" allowed'),
        (req, res, next) => {
            const errors = validationResult(req);
            console.log("errors:", errors);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            controllerMessages.create(req, res, next);
        }
);

export default router;
