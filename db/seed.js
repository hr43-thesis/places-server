// get data
const data = require('./data');
// establish db connection
const db = require('../models');

data.forEach((table) => {
  const modelName = Object.keys(table)[0];
  const entries = table[modelName];
  entries.forEach((srcEntry) => {
    db[modelName].create(srcEntry)
      .then((dbEntry) => {
        console.log('Created entry:', dbEntry, ' on ', modelName);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});