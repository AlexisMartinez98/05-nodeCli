// // Un prompt como output
// process.stdout.write("prompt > ");

// // El evento STDIN 'data' se dispara cuando el usuario escribe una línea
// process.stdin.on("data", function (data) {
//   let cmd = data.toString().trim(); // Remueve la nueva línea

//   process.stdout.write("You typed: " + cmd);
//   process.stdout.write("\nprompt > ");
// });
//EMPEZAMOS WORKSHOP
// Un prompt como output
process.stdout.write("prompt > ");

const commands = require("./commands");

process.stdin.on("data", function (data) {
  let cmd = data.toString().trim().split(" "); // Remueve la nueva línea
  if (cmd === "pwd") {
    commands.pwd();
  } else if (cmd === "date") {
    commands.date();
  } else if (cmd === "ls") {
    commands.ls();
  } else if (cmd[0] === "echo") {
    commands.echo(cmd);
  }
  process.stdout.write("\nprompt > ");
});
