import express from 'express';

const app = express();

app.get('/users', (req, res) => {
	const users = [
		{ name: 'Marco', age: 24 },
		{ name: 'Amorim', age: 23 },
	];

	return res.json(users);
});

app.listen(3333);
