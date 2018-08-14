'use strict'
import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import sapper from 'sapper';
import { manifest } from './manifest/server.js';

const app = express();

app.use(

	sirv('assets'),
	sapper({ manifest }));

if (process.env.NODE_ENV == 'development') {

	// dont use compress on lambda as api gateway takes care of this
	app.use(compression({ threshold: 0 }));

	console.log("listening on", process.env.PORT);
	app.listen(process.env.PORT);

}

export default app;
