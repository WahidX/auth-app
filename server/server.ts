import express from "express";
const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
	console.log("server ping successful");
	res.send("Server running fine");
});
app.use("/api", require("./api"));

app.listen(port, () => {
	console.log(`Server running on ${port}`);
});
