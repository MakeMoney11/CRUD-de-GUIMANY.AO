const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.getByEmail(email);

  if (!usuario) {
    return res.status(401).json({ message: 'Usuário não encontrado!' });
  }

  if (!usuario.validarSenha(senha)) {
    return res.status(401).json({ message: 'Senha incorreta!' });
  }

  // Gerar e retornar token JWT (opcional)

  res.json({ message: 'Login efetuado com sucesso!' });
});

module.exports = router;
