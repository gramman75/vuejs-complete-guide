import Vue from 'vue';
import Vuex from 'vuex';
import NewsStore from '@/store/modules/news';
import JobsStore from '@/store/modules/jobs';
import AskStore from '@/store/modules/ask';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    NewsStore,
    JobsStore,
    AskStore,
  }
});
