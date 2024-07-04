const { execFile } = require(`child_process`);

execFile(`node`, [`-v`], (error, stdout, stderr) => {
  if (error) {
    console.log(`ERROR : ` + error);
    return;
  }
  if (stderr) {
    console.log(`STDERR : ` + stderr);
    return;
  }
  console.log(`STDOUT (execFile) : ` + stdout);
});
