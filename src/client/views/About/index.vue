<template>
    <h1 class="about">
        About
    </h1>
    <ul>
        <li>{{userInfo.name}}</li>
        <li>{{userInfo.sex}}</li>
    </ul>
</template>


<script>
import {useStore} from 'vuex'
export default {
    name:'About',
    setup(){
        const {getters} = useStore()
        const userInfo = getters['user/getData']
        return {
            userInfo
        }
    }
}
</script>
<style scoped>
    .about {
        color:blanchedalmond
    }
</style>