const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      users.title,
    ]);
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [users.title, users.id]
    );
  }
}

module.exports = UsersManager;
