import HackerNews from '@/api/HackerNews';
import { VuexModule, Module, MutationAction } from "vuex-module-decorators";

@Module({namespaced: true})
export default class ItemStore extends VuexModule{
    item: any = {};

    @MutationAction
    public async fetchItem(id: string){
        const item = await HackerNews.fetchItem(id);
        return {
            item
        }
    }

    get getItem(){
        return this.item;
    }
}