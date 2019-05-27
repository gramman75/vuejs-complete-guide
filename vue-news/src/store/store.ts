import Vue from 'vue';
import Vuex from 'vuex';
import NewsStore from '@/store/modules/news';
import JobsStore from '@/store/modules/jobs';
import AskStore from '@/store/modules/ask';
import UserStore from '@/store/modules/user';
import ItemStore from '@/store/modules/item';
import ListStore from '@/store/modules/list';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    NewsStore,
    JobsStore,
    AskStore,
    UserStore,
    itemStore: ItemStore,
    ListStore,
  }
});
