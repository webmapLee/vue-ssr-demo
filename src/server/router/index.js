const Router = require('@koa/router')
const fs  = require('fs')
const {renderToString} = require('@vue/server-renderer')
const {resolve} = require('path')

const serverBundle = require('../../../dist/server-bundle.js').default
const template = fs.readFileSync(resolve(__dirname, '../../../dist/index.html'),'utf-8')
const renderState = (state,windowKey)=>{
    return `<script>window.${windowKey} = ${JSON.stringify(state)}</script>`
}
const router = new Router()
module.exports = (app)=>{
    router.get(['/','/about'],async (ctx,next) => {
        const {app:vueApp,router:vueRouter,store} = serverBundle()
        vueRouter.push(ctx.req.url)
        await vueRouter.isReady()
        let vueContent = await renderToString(vueApp)
        vueContent = `<div id='app'>${renderState(store.state,'__INITIAL_STATE__')}${vueContent}</div>`
        let html = template.replace('<div id = \'app\'></div>', vueContent)
        ctx.body = html
    })
    app.use(router.routes()).use(router.allowedMethods())
}