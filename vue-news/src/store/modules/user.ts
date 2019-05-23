import HackerNews from '@/api/HackerNews';
import { Module, VuexModule, MutationAction } from "vuex-module-decorators";

@Module({namespaced: true})
export default class UserStore extends VuexModule{
    user: any = {};

    @MutationAction
    public async fetchUser(id: string){
        const user = await HackerNews.fetchUser(id);
        return {
            user
        }

    }
}
