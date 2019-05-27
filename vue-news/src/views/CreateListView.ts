import ListView from '@/views/ListView.vue';
import { Vue, Component } from 'vue-property-decorator';
import bus from '@/utils/bus.ts';

@Component({
    components:{
        ListView,
    }
})
export default class CreateListView extends Vue{
    CreateListView(name:string){
        this.execute(name)
    }

    /**
     * 
     * @param name 
     */
    public execute(name: string){
        let self = this;
        return {
            name: name,
            created() {
                self.$store.dispatch('ItemStore/fetchList', self.$route.name)
                    .then(()=>{
                        bus.$emit('end:spinner');
                    })
            },
            render(createElement: Function){
                createElement(ListView);
            }
        }
    }
}