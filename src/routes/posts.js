import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
    res.send("Displaying posts!")
})

export default router;