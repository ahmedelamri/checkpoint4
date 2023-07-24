const AbstractManager = require("./AbstractManager");

class PanierManager extends AbstractManager {
  constructor() {
    super({ table: "panier" });
  }

  findAll() {
    return this.database.query(
      `select
        panier.*,
        JSON_ARRAYAGG(
          JSON_OBJECT("parfum_id", panier_parfum.parfum_id, "quantity", panier_parfum.quantity)
        ) as parfums,
        SUM(panier_parfum.quantity * parfum.prix) as prix_total
        from  ${this.table}
        join panier_parfum on panier.id = panier_parfum.panier_id
        join parfum on panier_parfum.parfum_id = parfum.id
        group by panier.id`
    );
  }

  async save(panier) {
    const [result] = await this.database.query(
      `insert into ${this.table} () values ()`
    );

    return this.database.query(
      `insert into panier_parfum (panier_id, parfum_id, quantity) values ${panier
        .map(() => "(?, ?, ?)")
        .join(",")}`,
      panier.map((parfum) => [result.insertId, parfum.id, parfum.stock]).flat()
    );
  }
}

module.exports = PanierManager;
