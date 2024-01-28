import express from "express";

import { getUserInfo, getUserInfoId, createUser } from "./database.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/users", async (req, res) => {
  const users = await getUserInfo();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUserInfoId(id);
  res.send(user);
});

app.post("/users", async (req, res) => {
  const { firstName, lastName, birthday } = req.body;
  const newUser = await createUser(firstName, lastName, birthday);
  res.status(201).send(newUser);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
