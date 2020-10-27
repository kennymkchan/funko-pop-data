const jsonexport = require('jsonexport');
const fs = require('fs');

const data = fs.readFileSync('funko_pop.json');
let csvObj = JSON.parse(data);

jsonexport(csvObj, function(err, csv){
  if(err) return console.error(err);

  fs.writeFile('funko_pop.csv', csv, (err) => {
    if (err) {
      throw err;
    }
    console.log("CSV data is saved.");
  });
});
