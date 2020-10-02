import knex from 'knex';
const configKnex = require('../knexfile')

const connection = knex(configKnex.development);

export default connection;
