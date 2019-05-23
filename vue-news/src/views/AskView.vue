<template>
    <div>
        <ul class="news-list">
            <li v-for="item in ask" :key="item.id" class="post">
                <div class="points">
                    {{item.points}}
                </div>

                <div>
                    <p class="news-title">
                        <router-link :to="`item/${item.id}`">
                            {{item.title}}
                        </router-link>
                    </p>
                    <small class="link-text">
                        {{item.time_ago}}
                        by 
                        <router-link :to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
                    </small>
                </div>
            </li>
        </ul>
        <p v-for="item in ask" :key="item.id">
            <router-link :to="`item/${item.id}`">{{item.title}}</router-link>
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HackerNews from "@/api/HackerNews";

@Component
export default class AskViews extends Vue {

    created() {
        this.$store.dispatch('AskStore/fetchAskList')
    };

    get ask(){
        return this.$store.state.AskStore.ask;
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