const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1"), 0);
setTimeout(() => console.log("Timer 1b"), 3000);
setImmediate(() => console.log("Immediate 1"));

fs.readFile("test-file.txt", () => {
  console.log("I/O task done");
  console.log("======================");

  setTimeout(() => console.log("Timer 2 - callback"), 0);
  setTimeout(() => console.log("Timer 3 - callback"), 3000);
  setImmediate(() => console.log("Immediate 2 - callback"));

  process.nextTick(() => console.log("Process tick"));
  
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Sync Encryption done");
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Sync Encryption done");

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Encryption done");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Encryption done");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Encryption done");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Encryption done");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Encryption done");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Encryption done");
  });
});

console.log("Basic flow");
