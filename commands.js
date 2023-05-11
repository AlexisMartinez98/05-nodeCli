module.exports = {
  pwd: function () {
    process.stdout.write("Estas es tu ubicacion actual: " + process.argv);
  },
  date: function () {
    let fechaActual = new Date();
    process.stdout.write("Fecha actual: " + fechaActual);
  },
  ls: function () {
    const fs = require("fs");
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
    });
  },
  echo: function (args) {
    process.stdout.write("tu texto es: " + args.slice(1).join(" "));
  },
};
