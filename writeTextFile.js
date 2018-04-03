var fs = require('fs');

module.exports = fs.writeFile(filepath, output, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
