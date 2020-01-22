const express = require("express");
const { default: got } = require("got");
const cors = require("cors");
const morgan = require("morgan");

function getComicURL(id = 0) {
  return id
    ? `https://xkcd.com/${id}/info.0.json`
    : "https://xkcd.com/info.0.json";
}

const { PORT = 8081 } = process.env;

express()
  .use(cors())
  .use(morgan("dev"))
  .get("/comic/:comicId", (req, res, next) =>
    (async () => {
      const comicId = Number(req.params.comicId);
      const url = getComicURL(comicId);

      const data = await got(url).json();

      res.json(data);
    })().catch(next)
  )
  .all((req, res) => res.sendStatus(404))
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening to port ${PORT}`);
  });
