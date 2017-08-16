import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './front-end/components/App';
import morgan from 'morgan';
const app = express();

app.use(express.static('public'));

app.use(morgan('dev'));

app.get('*', (req, res) => {
	
	var rendered = renderToString(<App />);

	res.send(`

		<html>
			<head>
				<title>React App!</title>
			</head>
			<body>
				<div id="root">${rendered}</div>
				<script src="/bundle.js"></script>				
			</body>
		</html>

	`)
});

app.post('/send', (req, res) => {
	res.redirect('/');
});

app.listen(8080, () => console.log('oki doki chiki puki'));