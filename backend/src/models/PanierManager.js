const AbstractManager = require("./AbstractManager");

class PanierManager extends AbstractManager {
  constructor() {
    super({ table: "panier" });
  }

  insert(panier) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      panier.title,
    ]);
  }

  save(panier) {
    return this.database.query(
      `insert into panier_parfum (panier_id, parfum_id) values ${panier.parfums
        .map(() => "(?, ?)")
        .join(",")}`,
      panier.parfums.map((parfum) => [panier.id, parfum.id]).flat()
    );
  }

  update(panier) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [panier.title, panier.id]
    );
  }
}

module.exports = PanierManager;
