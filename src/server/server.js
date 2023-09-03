const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "register",
});

app.get("/get", (req, res) => {
  res.send("Hello world");
});

app.post("/post", (req, res) => {
  const { email } = req.body;
  const { nome } = req.body;
  const { data } = req.body;
  const { senha } = req.body;

  let SQL =
    "INSERT INTO register (email, nome, data, senha) VALUES (?, ?, ?, ?)";

  db.query(SQL, [email, nome, data, senha], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => console.log("Servidor rodando..."));
