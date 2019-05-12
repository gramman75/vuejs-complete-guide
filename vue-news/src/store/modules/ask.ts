
import HackerNews from "@/api/HackerNews";
import { Module, Mutation, Action, VuexModule, MutationAction } from "vuex-module-decorators";

@Module
export default class AskStore extends VuexModule {
    public ask = [];

    // @Mutation public setAsk(ask : any) {
    //     this.ask = ask;
    // }

    @MutationAction
    public async fetchAskList() {
        const data = await HackerNews.fetchAskList()
        return {
            ask : data,
        }
    }

    get askData(): any{
        return this.ask;
    }
}
