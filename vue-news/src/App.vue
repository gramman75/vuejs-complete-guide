<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
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
.page-enter-active .page-leave-active{
  transition: opacity .5s;
}

.page-enter .page-leave-to{
  opacity: 0;
}


</style>
