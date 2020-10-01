import Knex from 'knex'

export async function up(knex: Knex) {
    //cria a tabela
   return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary()
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
        table.string('name').notNullable()
    })
}

export async function down(knex : Knex) {
    //volta atras (deleta a tabela)
    return knex.schema.dropTable('usuario')
}