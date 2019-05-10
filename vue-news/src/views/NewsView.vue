<template>
    <div>
        <ul>
            <li v-for="item in news" :key="item.id">{{item.title}}</li>    
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import  axios  from "axios";

@Component
export default class NewsView extends Vue {
    news: Array<any> = [];

    created() {
        axios.get('https://api.hnpwa.com/v0/news/1.json').then(response =>{
            this.news = response.data;

            console.log(this.news)
        })
        .catch(error =>{
            console.log(error);
        })
    }
    
}
</script>