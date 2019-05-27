<template>
    <div>
        <ul class="news-list">
            <li v-for="item in listItems" :key="item.id" class="post">
                <div class="points">
                    {{item.points || 0}}
                </div>

                <div>
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a :href="item.url">
                                {{item.title}}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="`item/${item.id}`">
                                {{ item.title }} 
                            </router-link>
                        </template>
                        
                    </p>
                    <small class="link-text">
                        {{item.time_ago}}
                        by 
                        <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">
                            {{item.user}}
                        </router-link>
                        <a :href="item.url" v-else>
                            {{ item.domain }}
                        </a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NewsView extends Vue {

    // created() {
    //     if (this.$route.name === 'news'){
    //         this.$store.dispatch('NewsStore/fetchNewsList');
    //     } else if (this.$route.name === 'ask'){
    //         this.$store.dispatch('AskStore/fetchAskList')
    //     } else if (this.$route.name === 'jobs'){
    //         this.$store.dispatch('JobsStore/fetchJobsList');
    //     }
    // }

    get listItems() {
        // if (this.$route.name === 'news'){
        //     return this.$store.state.NewsStore.news;
        // } else if (this.$route.name === 'ask'){
        //     return this.$store.state.AskStore.ask;
        // } else if (this.$route.name === 'jobs'){
        //     return this.$store.state.JobsStore.jobs;
        // }
        return this.$store.state.ListStore.list;


    }
}
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.news-title {
    margin: 0;
}

.link-text {
    color: #828282;
}
</style>