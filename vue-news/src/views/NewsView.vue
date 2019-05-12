<template>
    <div>
        <div>
            <p v-for="item in $store.state.NewsStore.news" :key="item.id">
                <a v-bind:href="item.url">{{item.title}}</a> 
                 <small>{{item.time_ago}} by {{item.user}}</small>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import  axios  from "axios";
import HackerNews from '@/api/HackerNews';

@Component
export default class NewsView extends Vue {
    // news: Array<any> = [];

    created() {
        this.$store.dispatch('fetchNewsList');
        // HackerNews.fetchNewsList().then(response => {
        //     this.news = response.data;
        // });
    }
}
</script>