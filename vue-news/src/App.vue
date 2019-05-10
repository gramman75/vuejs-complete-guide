<template>
  <div id="app">
    <ToolBar></ToolBar>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>

import {Component, Vue} from 'vue-property-decorator';
import ToolBar from '@/components/ToolBar.vue';

@Component({
  components : {
    ToolBar,
  },
})
export default class App extends Vue {}


</script>

<style>


</style>
