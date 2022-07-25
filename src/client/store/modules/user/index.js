import store from './store'
import actions from './action'
import mutations from './mutations'
import getters from './getter'

// 避免状态单例
export default ()=>({
    namespaced:true,
    state:store(),
    getters,
    mutations,
    actions
})