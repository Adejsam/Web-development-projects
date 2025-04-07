const fs = require("fs");

fs.writeFile('message.txt','hello there', "utf-8", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });