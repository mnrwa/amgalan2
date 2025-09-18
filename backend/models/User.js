const db = require('../database/db');

class User {
  static async findAll() {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
  }

  static async findByPk(id) {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(userData) {
    const result = await db.query(
      'INSERT INTO users (name, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [userData.name, userData.lastname, userData.email, userData.password]
    );
    return result.rows[0];
  }
}

module.exports = User;