const Koa = require('koa');
const server = require('koa-static')
const router = require('./router')
const {resolve} = require('path')

const app = new Koa()
router(app)
app.use(server(resolve(__dirname,'../../dist')))

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000')
})