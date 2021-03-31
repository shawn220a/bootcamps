const FileIO = require("./fileIO");

const fileIO = new FileIO();

fileIO.write("message.txt", "Hello World!");

let message = fileIO.read("message.txt");

console.log(message);

fileIO.append("message.txt", "\nGoodbye World!");

message = fileIO.read("message.txt");

console.log(message);
