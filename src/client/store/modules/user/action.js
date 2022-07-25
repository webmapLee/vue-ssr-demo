export default {
    setData({commit}){
        const payload = {
            name:'new user',
            sex:'male',
        }
        commit('setData', payload)
    }
}