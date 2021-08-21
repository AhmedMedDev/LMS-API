const NodeCache = require( "node-cache" );

const Cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

module.exports = Cache;