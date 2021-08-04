/**
 * Due to iOS and Android development restrictions on requesting
 * non-secured http requests, requests has to be made through IP
 * address rather than 'localhost'
 */
const ip = "123.456.7.89";
module.exports = { ip };
