'use strict';
const fs        = require('fs');
const dataFile  = __dirname + '/../dataFile/data.json';

let getData = (dataFile) => {
    // open the file
    try {
        let data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
        if(data.length > 1) {
            console.log(data);
            return data;  
        }
        else {
            console.log('Empty file!');
            return -1;
        }    
    }
    catch (err) {
        console.log('File not found');
        return -2;
    }

}

getData(dataFile);

