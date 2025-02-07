const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// const value = Math.random()*10;

app.get("/api", (req, res) => {
    res.json({
        quantity: Math.floor(Math.random()*100 + 1),
        price: Math.floor(Math.random()*100 + 1),
        profit: Math.floor(Math.random()*100 + 1),
        total: Math.floor(Math.random()*100 + 1)
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
