const path = require('path')
const debug = require('debug')('app:config:project')
const ip = require('ip')

debug('*** Creating default project configuration ***')

/** Default Configuration */
const config = {
  env: process.env.NODE_ENV || 'development',

  /* Project Structure */
  path_base: path.resolve(__dirname, '..'),
  dir_client: 'client',
  dir_dist: 'dist',
  dir_server: 'server',

  /* Server Configuration */
  server_host: ip.address(), // use string 'localhost' to prevent exposure on local network
  server_port: process.env.PORT || 3000,

  /* Compiler Configuration */
  compiler_babel: {
    cacheDirectory: true,
    plugins: ['transform-runtime'],
    presets: ['es2015', 'react', 'stage-3']
  },
  compiler_devtool: 'source-map',
  compiler_hash_type: 'hash',
  compiler_public_path: '/'

  /* Test Configuration */
}

/**
 * Environment
 */
config.globals = {
  'process.env': {
    'NODE_ENV' : JSON.stringify(config.dev)
  },
  'NODE_ENV': config.env,
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production'
}

/* Utilities */
function base() => {
  const args = [config.path_base].concat([].slice.call(arguments))
  return path.resolve.apply(path, args)
}

config.paths = {
  base: base,
  client: base.bind(null, config.dir_client),
  public: base.bind(null, config.dir_client),
  dist: base.bind(null, config.dir_dist)
}
