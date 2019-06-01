<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import bus from '@/utils/bus';

@Component
export default class ListMixin extends Vue {
    // created() {
    //     bus.$emit('start:spinner');
    //     setTimeout(()=>{
    //         this.$store.dispatch('ListStore/fetchList', this.$route.name)
    //             .then(()=>{
    //                 bus.$emit('end:spinner');
    //             })
            
    //     }, 3000)
    // }

    mounted() {
        bus.$emit('end:spinner');
    }
}
</script>
