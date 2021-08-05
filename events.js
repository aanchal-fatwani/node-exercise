const EventEmitter = require("events");
const http = require("http");

// const myEmitter = new EventEmitter();

// myEmitter.on("SALE_live", (discount) => {
//   console.log("Sale....... " + discount);
// });

// myEmitter.on("SALE_live", () => {
//   console.log("Go.......");
// });

// myEmitter.emit("SALE_live", "50%");

class Sale extends EventEmitter {
  constructor() {
    super();
  }
}

const mySaleEmitter = new Sale();

mySaleEmitter.on("SALE_live", (discount) => {
  console.log("Sale....... " + discount);
});

mySaleEmitter.on("SALE_live", () => {
  console.log("Go.......");
});

mySaleEmitter.emit("SALE_live", "50%");

///////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req.url);
  res.end("Request received");
});
server.on("request", (req, res) => {
  console.log("Another request received");
  res.end("Request received");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests..");
});
