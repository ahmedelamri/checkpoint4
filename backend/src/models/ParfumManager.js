const AbstractManager = require("./AbstractManager");

class ParfumManager extends AbstractManager {
  constructor() {
    super({ table: "parfum" });
  }

  insert(parfum) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      parfum.title,
    ]);
  }

  update(parfum) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [parfum.title, parfum.id]
    );
  }
}

module.exports = ParfumManager;
