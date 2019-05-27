import ListView from '@/views/ListView.vue';
import bus from '@/utils/bus.ts'

export default function createListView(name) {
    return  {
        name: name,
        created() {
            bus.$emit('start:spinner');
            setTimeout(()=>{
                this.$store.dispatch('ListStore/fetchList', this.$route.name)
                  .then(()=>{
                      bus.$emit('end:spinner');
                  })
                
            }, 3000)
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}