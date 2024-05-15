const db = require('./db');

const Produto = class Produto {
  constructor(id, nome, preco) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  static async getAll() {
    const sql = 'SELECT * FROM produtos';
    const [results] = await db.query(sql);
    const produtos = results.map(row => new Produto(row.id, row.nome, row.preco));
    return produtos;
  }

  static async getById(id) {
    const sql = 'SELECT * FROM produtos WHERE id = ?';
    const [results] = await db.query(sql, [id]);
    if (results.length === 0) return null;
    const produto = new Produto(results[0].id, results[0].nome, results[0].preco);
    return produto;
  }

  async create() {
    const sql = 'INSERT INTO produtos (nome, preco) VALUES (?, ?)';
    const [results] = await db.query(sql, [this.nome, this.preco]);
    this.id = results.insertId;
  }

  async update() {
    const sql = 'UPDATE produtos SET nome = ?, preco = ? WHERE id = ?';
    await db.query(sql, [this.nome, this.preco, this.id]);
  }

  async delete() {
    const sql = 'DELETE FROM produtos WHERE id = ?';
    await db.query(sql, [this.id]);
  }
};

module.exports = Produto;
