<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script lang='ts'>

import {Component, Vue} from 'vue-property-decorator';
import ToolBar from '@/components/ToolBar.vue';
import Spinner from '@/components/Spinner.vue';
import bus from '@/utils/bus.ts';

@Component({
  components : {
    Spinner,
    ToolBar,
  },
})
export default class App extends Vue {
  loadingStatus: boolean = false;

  public startSpinner(): void{
    this.loadingStatus = true;
  }

  public endSpinner(): void {
    this.loadingStatus = false;
  }

  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  }

  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }

}


</script>

<style scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
