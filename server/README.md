# Funcionalidades

## Conexões

- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
  - Filtrar por matéria, dia da semana e horário;


## Extras

- Métodos HTTP 
  - GET: Buscar ou listar uma informacao
  - POST: Criar alguma nova informacao
  - PUT: Atualizar uma informacao existente
  - DELETE: Deletar uma informacao existente

- Estrutura e Parâmetros
  - Corpo (Request Body): Dados para criacao ou atualizacao de um registro
  - Route Params:	Identificar qual recurso eu quero atualizar ou deletar
	- Query Params: Paginacao, filtros, ordenacao (?page=2&sort=name)