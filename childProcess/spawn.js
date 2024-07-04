const { spawn } = require(`child_process`);

const ls = spawn(`ls`, [`-lh`]);

ls.stdout.on(`data`, (data) => {
  console.log(`Standard Output : ` + data);
});
ls.stderr.on(`err`, (err) => {
  console.log(`Standard Error : ` + err);
});
ls.on(`close`, (code) => {
  console.log(`Process exit with code ${code}`);
});
// The code parameter is provided automatically by the child_process module when the close event occurs
