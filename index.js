const express = reuqire("express");

const app = express();

app.get("/posts", (req, res) => {});
app.get("/posts", (req, res) => {});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
