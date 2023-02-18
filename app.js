const express = require("express");
const helmet = require("helmet");

const app = express();

//Set security HTTP headers
app.use(helmet());

app.listen(8080, () => {
  console.log(`App running on port ${8080}...`);
});

app.get("/", (req, res) => res.send({ message: "Hello EC2" }));
