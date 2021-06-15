import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';

const app = express();

// server
app.use(
    '/api',
    createProxyMiddleware({
        changeOrigin: true,
        ws: true,
        // hard coded port since not sure of an alternative clear solution
        target: 'http://localhost:3001',
        logLevel: 'debug',
    })
);

// client
app.use(
    '/',
    createProxyMiddleware({
        changeOrigin: true,
        ws: true,
        // hard coded port since not sure of an alternative clear solution
        target: 'http://localhost:3000',
        logLevel: 'debug',
    })
);

app.listen(8080);
