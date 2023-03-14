const CSVToJSON = require('csvtojson')
const fs = require('fs');

const folderName = 'files'
const fileName = 'rainTest'  //파일이름 변경해서 사용하시면 됩니다.


CSVToJSON()
  // csv convert to json array
  .fromFile(`assets/${folderName}/${fileName}.csv`)
  .then(data => {
  	// console.log(data)
    // save json file
   	fs.writeFile(`assets/${folderName}/${fileName}.json`, JSON.stringify(data, null, 4), err => {
      if (err) {
        throw err
      }
      console.log('JSON array is saved.')
    })
  })
  .catch(err => {
    console.log(err)
  })


module.exports = CSVToJSON ;
