const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

router.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  // Validação dos dados (opcional)

  const novoUsuario = new Usuario(null, nome, email, senha);
  await novoUsuario.create();

  res.json({ message: 'Usuário cadastrado com sucesso!' });
});

module.exports = router;
