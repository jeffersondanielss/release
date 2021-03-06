const path = require('path');
const pkg = require('../package.json');

/**
 * Mostra a versão atual da lib
 * 
 * @returns {string} versão atual da lib
 */

const getVersion = () => pkg.version;

module.exports = getVersion;