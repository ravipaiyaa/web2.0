const express = require("express");
const app = express();

console.log("HELOO");
app.get("/", (req, res) => {
	var email = req.body.email;
	res.send({ email: email, sucess: "true" });
});
app.listen(3000, () => {
	console.log("server started and running on port 3000");
});
