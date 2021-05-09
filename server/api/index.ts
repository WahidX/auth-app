import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("api running fine");
});

router.use("/v1", require("./v1"));

module.exports = router;
