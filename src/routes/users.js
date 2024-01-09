import { Router } from "express";

const router = Router();
router.get("/", async (req, res) => {
    res.send("Showing all users!");
});

router.post("/create", async (req, res) => {
    console.log("body", req.body);
    res.send({"user details": req.body});
});

export default router;