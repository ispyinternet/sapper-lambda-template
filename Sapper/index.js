'use strict'
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.SAPPER_DEST = __dirname + "/build";
process.env.PORT = process.env.PORT || 3000; // this still needs to be set to not break sapper middleware
const app = require('./build/server').default;
const awsServerlessExpress = require('aws-serverless-express')

exports.handler = (event, context) => {

    console.log(event);

    const server = awsServerlessExpress.createServer(app, null, ['*/*'])
    awsServerlessExpress.proxy(server, event, context);

}
