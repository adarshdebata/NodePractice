const { exec } = require(`child_process`);
/* 
Purpose: This uses destructuring assignment to import only the exec function from the child_process module.
Usage: It makes the exec function available directly by its name without needing to refer to the module itself.
*/

exec(`node -v`, (error, stdout, stderr) => {
  if (error) {
    console.log(`ERROR : ` + error);
    return;
  }
  if (stderr) {
    console.log(`STDERR : ` + stderr);
    return;
  }
  console.log(`STDOUT : ` + stdout);
});
