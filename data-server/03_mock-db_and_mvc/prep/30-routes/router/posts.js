
import express from 'express';


const router = express.Router();

router.get('/:id', , async (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    res.send(post);
});

router.post('/', async (req, res, next) => {
    console.log("body:", req.body);
    const post = posts.push(req.body);
    await db.write();
    res.send("done");
});

export default router;
