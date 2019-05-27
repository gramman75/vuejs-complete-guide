
import HackerNews from "@/api/HackerNews";
import { Module, Mutation, Action, VuexModule, MutationAction } from "vuex-module-decorators";

// @Module({stateFactory: true, namespaced: true, name: 'jobs'})
@Module({ namespaced: true })
export default class ListStore extends VuexModule {
    list = [];

    // @Mutation
    // public setJobs(jobs: any) {
    //     this.jobs = jobs;
    // }

    // @Action({commit: 'setJobs'})
    // public async fetchJobsList() {
    //     await HackerNews.fetchJobsList()
    //         .then(response => {
    //             return response.data;
    //             // this.context.commit('setJobs', response.data);
    //         });
    // }
    @MutationAction
    public async fetchList(name: string){
        const data = await HackerNews.fetchList(name)
        return {
            list : data,
        }
    }
}
