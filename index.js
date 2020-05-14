const express = require("express");
const app = express();

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

app.get("/", (req, res) => {
  res.send("Hi from express");
});

const jokeRouter = require("./routers/joke");
app.use("/jokes", jokeRouter);

const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
