const _ = require('lodash');

// [
//   "CD_DIRECAO",
//   "DT_INI_DIRECAO",
//   "CD_DEPT",
//   "DT_INI_DEPT"
// ]

const data = [
    {
      "CD_DIRECAO": "400"
    },
    {
      "DT_INI_DIRECAO": "1900-01-01"
    },
    {
      "CD_DEPT": "370"
    },
    {
      "DT_INI_DEPT": "1900-01-01"
    }
];


const newData = data.map(item => _.keys(item)).map(item => item[0]);

console.log(newData);




