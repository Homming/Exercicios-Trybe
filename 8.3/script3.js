const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((previousValue, currentValue) => {
      return previousValue + ((currentValue.split("a").length - 1) + (currentValue.split("A").length - 1));
  },0);
}

assert.deepEqual(containsA(), 20);