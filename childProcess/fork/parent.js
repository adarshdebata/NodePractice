const { fork } = require(`child_process`);

const child = fork(`./child.js`);

child.on(`error`, (err) => {
  console.log("ERROR : " + err);
});
child.on(`message`, (msg) => {
  console.log(`Message from child (Parent) : ` + msg);
});
child.send(`Hello from Parent`);

// Ensure the child process is killed when the parent process exits
process.on("exit", () => {
  console.log("Parent process exiting, killing child process...");
  child.kill();
});

// Optionally handle parent process signals to ensure proper cleanup (manual CleanUp)
// ["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) => {
//   process.on(signal, () => {
//     child.kill();
//     process.exit();
//   });
// });

// Automatically exit the parent process after 3 seconds 
setTimeout(() => {
    console.log("Parent process timeout, exiting...");
    process.exit();
  }, 3000);