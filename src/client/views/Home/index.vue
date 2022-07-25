<template>
    <h1 class="home">
        Home
    </h1>
    <ul>
        <li>{{userInfo.name}}</li>
        <li>{{userInfo.sex}}</li>
    </ul>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
import {fetchData, isSSR} from '../../utils'
export default {
    name:'Home',
    setup(){
        const {commit,getters} = useStore()
        const userInfo = computed(()=>getters['user/getData'])
        const fetchUser = async ()=>{
            const data = await fetchData()
            commit('user/setData', data)
        }
        if(userInfo.value.name === 'liyb' && !isSSR){
            fetchUser()
        }

        return {
            userInfo,
            fetchUser
        }
    },
    async serverPrefetch(){
        await this.fetchUser()
    }
}
</script>
<style scoped>
    .home {
        color:aquamarine
    }
</style>