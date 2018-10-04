//var csv is the CSV file with headers


var fs = require('fs');
var parse = require('csv-parse');

const csvPath = './v2.csv'

var csvData = [];
fs.createReadStream(csvPath)
    .pipe(parse({ delimiter: ':' }))
    .on('data', function (csvrow) {
        //append to data model
        csvData.push(csvrow[0].replace(":", " "));
    })
    .on('end', function () {
        var result = [];

        // Set the headers as the first row
        var headers = csvData[0].split(",");

        // Now iterate through all the rows
        for (var i = 1; i < csvData.length; i++) {

            var obj = {};
            var currentline = csvData[i].split(",");

            var j = 0;

            // Append the initial fields
            for (; j < headers.length; j++) {
                if (headers[j] == "Rate Details") {
                    break;
                }
                obj[headers[j]] = currentline[j];
            }

            // Manually add in this organization 
            obj["Rate Details"] = {
                "Planned Charges" : {},
                "Unplanned Charges" : {}
            }

            j += 2; // Do this to ignore the Planned Charges and Rate Details fields

            // Append the planned charges
            for (; j < headers.length; j++) {
                if (headers[j] == "Unplanned Charges") {
                    break;
                }
                obj["Rate Details"]["Planned Charges"][headers[j]] = currentline[j];
            }

            j++; // Do this to ignore the Unplanned Charges field

            // Append the unplanned charges
            for (; j < headers.length; j++) {
                obj["Rate Details"]["Unplanned Charges"][headers[j]] = currentline[j];
            }

            result.push(obj);
        }

        console.log(JSON.stringify(result, null, 2));
    });



