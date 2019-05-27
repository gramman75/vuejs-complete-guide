<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue';
import ListMixin from '@/mixin/ListMixin.vue'
import bus from '@/utils/bus.ts';

@Component({
    components: {
        ListItem
    }
})
export default class NewsView extends Mixins(ListMixin){
    // created() {
    //     bus.$emit('start:spinner');
    //     setTimeout( ()=>{
    //         this.$store.dispatch('NewsStore/fetchNewsList').then(()=>{
    //             bus.$emit('end:spinner');
    //         });
    //     }, 3000)

    // }
  
}
</script>

<style scoped>
</style>