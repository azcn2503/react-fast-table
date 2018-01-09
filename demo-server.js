const express = require("express");
const serveStatic = require("serve-static");

const app = express();

app.use(serveStatic("dist"));

app.listen(3000, () => {
  console.log("Demo server listening on port 3000");
});
