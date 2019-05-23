import HackerNews from '@/api/HackerNews';
import { Module, VuexModule, Mutation, Action, MutationAction } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class NewsStore extends VuexModule {
    news = [];

    // @Mutation 
    // public setNews(news: any): void {
    //     console.log(news);
    //     this.news = news;
    // }


    @MutationAction
    public async fetchNewsList(){
        const data = await HackerNews.fetchNewsList();
        return {
            news: data,
        }

    // @Action public fetchNewsList(){
        HackerNews.fetchNewsList()
// tslint:disable-next-line: arrow-parens
          .then(response =>{
              return response.data;
            //   this.setNews(response.data);
            //   this.context.commit('setNews', response.data);
            //   this.news = response.data;
            //   return response.data;
          });
    }
}