const fs = require('fs');

 createFile = function (file) {
  var arr = fs.readFileSync(file, "utf-8");
  for(var i = 0; i < arr.length; ++i) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

module.exports = createFile;
