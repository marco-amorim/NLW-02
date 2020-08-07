import express from 'express';

const app = express();

app.use(express.json());

/*
	GET: Buscar ou listar uma informacao
	POST: Criar alguma nova informacao
	PUT: Atualizar uma informacao existente
	DELETE: Deletar uma informacao existente

	Corpo (Request Body): Dados para criacao ou atualizacao de um registro
	Route Params:	Identificar qual recurso eu quero atualizar ou deletar
	Query Params: Paginacao, filtros, ordenacao
*/

app.get('/users', (req, res) => {
	return res.json({ message: 'hello world' });
});

app.listen(3333);
