import express from "express";

const app = express();

app.get("/hello", (req,res,next) => {
    console.log("HELLO");
});

app.listen(8080, () => console.log("Running on port 8080"));