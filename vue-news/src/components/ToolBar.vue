<template>
    <div class="header">
        <router-link to="/news">News</router-link> | 
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>


<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

export default class ToolBar extends Vue {}
</script>

<style scoped>
.header {
    color: white;
    display: flex;
    padding: 10px 10px 10px 10px;
    background-color: #42b883;
}

.header .router-link-exact-active {
    color: yellow;
}

.header a{
    padding-right: 10px;
    padding-left: 10px;
}
</style>