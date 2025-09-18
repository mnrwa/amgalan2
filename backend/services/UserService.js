const User = require('../models/User'); 

class UserService {
  static async getAllUsers() {
    return await User.findAll(); 
  }

  static async getUserById(id) {
    return await User.findByPk(id); 
  }
}

module.exports = UserService;