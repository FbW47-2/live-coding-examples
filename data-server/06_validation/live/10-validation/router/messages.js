import express from 'express';
import controllerMessages from '../controller/messages.js';
import { body, param, check, validationResult } from 'express-validator';

const router = express.Router();

// http://localhost:3000/messages/1
// http://localhost:3000/messages/2
router.get('/:id',
	check('id', 'must be a number').isNumeric(),
	(req, res, next) => {
		console.log("request handler");

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		controllerMessages.getById(req, res, next);
	}
);

router.post('/',
	body('id', 'must be a number').isNumeric(),
	check('contact').optional().isEmail(),      // optionales element
	check(['title', 'text']).isString(),
	check('title').not().contains('<').withMessage('"<" not allowed'), // negierte Validierung
	check('title').not().contains('>').withMessage('">" not allowed'),
	check(['title', 'text']).escape(), // wandelt Zeichen soweit möglich in HTML-Entities um.

	(req, res, next) => {
		console.log("request handler");

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		controllerMessages.create(req, res);
	}
);

export default router;
