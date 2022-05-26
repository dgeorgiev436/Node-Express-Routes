const express = require("express");
const app = express();



app.get("/cats", (req,res) => {
	res.send("MEOW")
})

app.get("/r/:subreddit/:position", (req,res) => {
	const {subreddit, position} = req.params;
	res.send(`THIS IS A ${subreddit} SUBREDDIT SORTED BY ${position}`);
})

app.get("/dogs", (req,res) => {
	res.send("BARK")
})

app.get("/", (req, res) => {
	console.log("WE GOT A NEW REQUIEST")
	// console.dir(req);
	res.send("<h1>WELCOME TO HOME PAGE!!</h1>")
});

app.get("/search", (req,res) => {
	console.log(req.query);
	const {q, name} = req.query;
	res.send(`SEARCHING FOR ${q} with the name of: ${name}`);
})


app.get("*", (req,res) => {
	res.send("I DONT KNOW THAT PATH");
})





app.listen(3000, () => {
	console.log("SERVER STARTED ON PORT 3000");
})
