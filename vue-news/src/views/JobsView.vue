<template>
    <div>
        <list-item />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue';
import bus from '@/utils/bus.ts';
import ListMixin from '../mixin/ListMixin.vue';

@Component({
    components:{
        ListItem,
    }
})
export default class JobsViews extends Mixins(ListMixin) { //Vue {
    // created() {
    //     bus.$emit('start:spinner');
    //     setTimeout(() =>{
    //         this.$store.dispatch('JobsStore/fetchJobsList')
    //           .then(()=>{
    //               bus.$emit('end:spinner');
    //           });

    //     }, 3000)

    // }
}
</script>

<style scoped>
</style>