import express from "express";

import productsRoute from "./routes/productsRoutes.js";
const app = express();

const PORT = 5000 || 6000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("this is amazon scraper proxy api");
});

app.use("/", productsRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
