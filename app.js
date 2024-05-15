const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const cadastroRouter = require('./routes/cadastro');
const loginRouter = require('./routes/login');

app.use('/cadastro', cadastroRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
