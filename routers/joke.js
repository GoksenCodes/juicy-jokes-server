const { Router } = require("express");
const Joke = require("../models").joke;
const router = new Router();
const axios = require("axios");

router.get("/", async (req, res, next) => {
  // function getJoke() {
  //   return axios
  //   .get( "https://official-joke-api.appspot.com/jokes/programming/random")
  //   .then(latestJoke => latestJoke.data)
  //   .catch(err => console.error(err))
  // }
  const latestJoke = await axios.get(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  console.log("LATESTJOKE", latestJoke);
  try {
    const newJoke = await Joke.create({
      setup: latestJoke.data[0].setup,
      punchline: latestJoke.data[0].punchline
    });
    return res
      .status(201)
      .send({ message: "New joke is added successfully", newJoke });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
