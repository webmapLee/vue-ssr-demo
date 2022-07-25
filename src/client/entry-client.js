import createApp from './app'

const {app,store} = createApp()
if(window.__INITIAL_STATE__){
    console.log('window.__INITIAL_STATE__',window.__INITIAL_STATE__)
    store.replaceState(window.__INITIAL_STATE__)
}
app.mount('#app',true) //第二个参数设置为 true, 就不会重复的进行渲染