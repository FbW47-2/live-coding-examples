
import express from 'express';
import controllerPosts from '../controller/records.js';


const router = express.Router();

router.get('/:id', controllerPosts.getById );

router.post('/', async (req, res, next) => {
    console.log("body:", req.body);
    const post = posts.push(req.body);
    await db.write();
    res.send("done");
});

export default router;
