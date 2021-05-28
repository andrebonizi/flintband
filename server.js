// server.js
const { createServer } = require("http");
const app = require("./public/App.js");

createServer((req, res) => {
  const { html } = app.render({ url: req.url });

  res.write(`
    <!DOCTYPE html>
    <div id="app">${html}</div>
    <script src="/public/build/bundle.js"></script>
  `);

  res.end();
}).listen(3000);