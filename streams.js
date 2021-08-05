const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // 1.3 min, 42MB
  //Solution 1
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  //Solution 2: Streams
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found");
  //   });

  //Solution 3: Solving backpressure(read rate >> write rate) which occurs in soln2
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //source.pipe(destination)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening..");
});