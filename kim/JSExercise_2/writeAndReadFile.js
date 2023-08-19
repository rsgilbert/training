//Question 3

var fs = require('fs');
var file = 'my-data.txt';

fs.writeFile(file, 'Hello there!', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('The File was written successfully');
    }
});

var contents = fs.readFileSync(file);

console.log(contents);