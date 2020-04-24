exports.up = function(knex) {
  return knex.schema.createTable('produto', function (table){
    table.string('id').primary();
    table.string('nome_produto').notNullable();
    table.string('qta_produto').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('produto');
  
};
