import {createSSRApp,createApp} from 'vue'
import App from './App.vue'
import {isSSR} from './utils'
import createRouter from './router'
import createStore from './store'

//避免状态单例
export default function(){
    //环境判断
    const app = isSSR?createSSRApp(App):createApp(App)
    const router = createRouter()
    const store = createStore()
    app.use(router).use(store)
    return {app,router,store}
}