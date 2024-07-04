const fs = require("fs");
const util = require("util");
const buffer = Buffer.alloc(1024);

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
const openAsync = util.promisify(fs.open);
const readAsync = util.promisify(fs.read);
const writeAsync = util.promisify(fs.write);
const closeAsync = util.promisify(fs.close);

(async function () {
  try {
    // Sync Read
    let data = await readFileAsync("example.txt", "utf8");
    console.log(`Data (Sync Read): ${data}`);

    /* ****************************************************** */

    // Write initial content synchronously
    const initialContent = `Hello! I'm Content How you doing?!`;
    await writeFileAsync("example.txt", initialContent);
    let dataWrite = await readFileAsync("example.txt", "utf8");
    console.log(`Data Write: ${dataWrite}`);

    /* ****************************************************** */

    // Append data synchronously
    const content2 = ` I'm Learning Node.js`;
    await appendFileAsync("example.txt", content2);
    let dataAppend = await readFileAsync("example.txt", "utf8");
    console.log(`Data Append: ${dataAppend}`);
    /* ****************************************************** */

    // Async Read
    let asyncData = await readFileAsync("example.txt", "utf8");
    console.log(`\nData (Async Read): ${asyncData}`);

    /* ****************************************************** */

    // Opening a File using fs.open()
    console.log(`Opening a File using fs.open()`);
    let fd = await openAsync("example.txt", "r+");
    console.log(`\nFile opened successfully, file descriptor: ${fd}`);

    // Reading from the file
    let readResult = await readAsync(fd, buffer, 0, buffer.length, 0);
    console.log(`Bytes Read: ${readResult.bytesRead}`);
    console.log("Data Read:", buffer.toString("utf8", 0, readResult.bytesRead));

    // Writing to the file inside fs.open callback
    const openContent = `Hello! I'm Content Inside open How you doing?!`;
    await writeAsync(fd, openContent);
    let dataWriteOpen = await readFileAsync("example.txt", "utf8");
    console.log(`Data Write (inside fs.open): ${dataWriteOpen}`);

    // Closing the file descriptor
    await closeAsync(fd);
    console.log("File closed successfully.");
  } catch (err) {
    console.error(`Error: ${err}`);
  }
})();
