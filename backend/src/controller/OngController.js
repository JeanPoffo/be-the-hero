const generatorUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index(require, response) {
    return response.json(await connection('ongs').select('*'));
  },

  async create(request, response) {
    const {
      name,
      email,
      whatsapp,
      city,
      uf
    } = request.body;

    const id = generatorUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({
      id
    });
  }
};