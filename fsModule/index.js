const fs = require("fs");
const buffer = Buffer.alloc(1024);

// Sync Read
let data = fs.readFileSync(`example.txt`, `utf8`);
console.log(`Data (Sync Read) : ` + data);
/*  ********************************************** */
const content = `Hello! I'm write How you doing?!`;
fs.writeFileSync(`example.txt`, content, (err) => {
  if (err) {
    return console.log(err);
  }
});
let dataWrite = fs.readFileSync(`example.txt`, `utf8`);
console.log(`Data Write : ` + dataWrite);
/* ************************************************* */
// Append data
let content2 = ` I'm Apend`;
fs.appendFileSync("example.txt", content2, "utf8", function (err) {
  if (err) throw err;
  console.log("Data is appended to file successfully.");
});
let dataAppend = fs.readFileSync(`example.txt`, `utf8`);
console.log(`Data Append: ` + dataAppend);
/* ******************************************************* */

// Async Read
function asyncRead() {
  fs.readFile(`example.txt`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`\nData(Async Read) : ` + data.toString());
    }
  });
}

/* ****************************************************** */
console.log(`\nOpening a File using fs.open()`);
fs.open(`example.txt`, `r+`, (err, fd) => {
  if (err) {
    console.log(err);
  } else {
    console.log(` File opened successfully, file descriptor:  `, fd);
  }

  fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
    if (err) {
      console.log(err);
    } else {
      console.log(` Byte Read : ` + bytesRead);
      console.log(" Data Read:", buffer.toString());
    }
  });
  const content = `Hello! I'm write inside the block How you doing?!`;
  fs.write(fd, content, (err) => {
    if (err) {
      return console.log(err);
    }
    let dataWrite = fs.readFileSync(`example.txt`, `utf8`);
    console.log(` Data Write : ` + dataWrite);

    fs.close(fd, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("File closed successfully.");
    });
  });
});
