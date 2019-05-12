<template>
    <div>
        <ul>
            <li v-for="item in jobsItem" :key="item.id">{{item.title}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HackerNews from '@/api/HackerNews';
import jobs from '@/store/modules/jobs';

@Component
export default class JobsViews extends Vue {
    // jobs: Array<any>  = [];
    get jobsItem(){
        return this.$store.state.JobsStore.jobs;
    }

    created() {
        this.$store.dispatch('fetchJobsList');
        // HackerNews.fetchJobsList().then(response =>{
        //     this.jobs = response.data;
        // });
    };
}
</script>