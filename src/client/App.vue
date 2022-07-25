<template>
    <div>
        首页
    </div>
    <router-link to='/'>首页</router-link>
    <router-link to='/about'>about页</router-link>
    <router-view />
</template>

<script>
export default {
    name:'App',
}
</script>