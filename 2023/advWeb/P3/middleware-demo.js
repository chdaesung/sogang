const express = require('express');
const app = express();

app.use(middleware1);
app.use(middleware2);
//app.use(auth);

function middleware1(req, res, next) {
	console.log('I am middleware #1');
	next();
}

function middleware2(req, res, next) {
	console.log('I am middleware #2');
	next();
	/* const errObj = new Error('I am an error');
	next(errObj); */
}

function middleware3(req, res, next) {
	console.log('I am middleware #3');
	next();
}

function errorHandler(err, req, res, next) {
	if (err) {
		res.send('<h1>There was an error, Try again</h1>');
	}
}

function auth(req, res, next) {
	if (req.query.admin === 'true') {
		req.admin = true;
	} else {
		req.admin = false;
	}
	next();
}

app.get('/', middleware3, (req, res, next) => {
	console.log('I am the standard Express function');
	res.send('<h1>Hello World</h1>');
});

app.get('/login', auth, (req, res, next) => {
	console.log("User's admin authorization is " + req.admin);

	if (req.admin) {
		res.send('User authentication successful.');
	} else {
		res.send('User authentication failed!');
	}
});

app.use(errorHandler);

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
