<template>
    <div>
        <ul>
            <li v-for="item in getAsk" :key=item.id>{{item.title}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HackerNews from "@/api/HackerNews";

@Component
export default class AskViews extends Vue {

    created() {
        this.$store.dispatch('fetchAskList')
    };

    get getAsk(){
        return this.$store.state.AskStore.ask;
    }
}
</script>