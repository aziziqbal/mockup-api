const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "./db.json"));
const middlewares = jsonServer.defaults();
console.log('router : ', router)
server.use(middlewares);
server.use("/api", router);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
