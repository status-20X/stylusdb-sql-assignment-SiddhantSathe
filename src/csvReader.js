// const fs = require('fs');
// const csv = require('csv-parser');

// function readCSV(filePath) {
//     const results = [];

//     return new Promise((resolve, reject) => {
//         fs.createReadStream(filePath)
//             .pipe(csv())
//             .on('data', (data) => results.push(data))
//             .on('end', () => {
//                 resolve(results);
//             })
//             .on('error', (error) => {
//                 reject(error);
//             });
//     });
// }

// module.exports = readCSV;


const fs = require('fs');
const csv = require('csv-parser');

function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                data.push(row);
            })
            .on('end', () => {
                resolve(data);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}