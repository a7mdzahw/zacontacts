const next = require("next");
const express = require("express");
const start_db = require("./config/db");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const contacts = require("./pages/api/contacts");
start_db();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.use("/api/contacts", contacts);
  server.get("*", (req, res) => handle(req, res));

  const port = process.env.PORT || 3000;

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on Port ${port}`);
  });
});
