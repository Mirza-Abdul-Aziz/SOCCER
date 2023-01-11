import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) =>
  res.send(`Our Soccer applcation is running on the port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your soccer server is running on port ${PORT}`)
);
