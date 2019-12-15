const Koa = require('koa');
const Router = require('@koa/router');
const static = require('koa-static');
const path = require('path');
const {createReadStream} = require('fs')

const app = new Koa();
const router = new Router();

const hostname = '127.0.0.1';
const port = 3000;

const staticMiddleware = static(path.join(`${__dirname}/src/web`));

router.get('/', async (ctx, next)=>{
    ctx.type = 'html';
    ctx.body = createReadStream('./src/web/html/index.html');
});

router.get('/login', async(ctx, next)=>{
    ctx.type = 'html';
    ctx.body = createReadStream('./src/web/html/login.html');
});

app.use(staticMiddleware)
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, hostname, ()=>{
    console.log(`Listening on http://${hostname}:${port}`);
})