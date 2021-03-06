// @flow

const help = require('./help')()
const version = require('./getVersion')()
const args = process.argv.slice(2, 3).toString()

/**
 * Filtra argumentos recebidos
 * 
 * @param {string} [arg="args"] - argumento passados pelo usuáio.
 * @returns {string} versão da cli ou ajuda.
 * 
 * @example
 * resolveArgs('--version')
 */

const resolveArgs = (arg: string = args): string => {
  switch (arg) {
    case '--version':
    case '-v':
      return version

    default:
      return help
  }
}

module.exports = { resolveArgs, args }
