const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
    res.json({
        quantity: 2,
        price: 25,
        profit: 11,
        total: 50
    });
});

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

app.use("/.netlify/backend/app", router);
module.exports.handler = serverless(app);