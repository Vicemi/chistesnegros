const chistesData = require('./chistes.json');

function obtenerChiste() {
  const chistes = chistesData.chistes;
  if (!Array.isArray(chistes) || chistes.length === 0) {
    throw new Error('No hay chistes disponibles.');
  }

  const seed = Math.abs(Math.sin(Date.now() + Math.random()) * 10000);
  const indice = Math.floor((seed % 1) * chistes.length);

  return chistes[indice];
}

module.exports = obtenerChiste;
