<template>
    <div>
        <ul class="news-list">
            <li v-for="job in jobs" :key="jobs.id" class="post">
                <div class="points">
                    {{job.points || 0}}
                </div>

                <div>
                    <p class="news-title">
                        <a :href="job.url">
                            {{job.title}}
                        </a>
                    </p>
                    <small class="link-text">
                        {{job.time_ago}}
                        by 
                        <a :href="job.url">{{job.domain}}</a>
                        
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HackerNews from '@/api/HackerNews';
import jobs from '@/store/modules/jobs';

@Component
export default class JobsViews extends Vue {
    get jobs(){
        return this.$store.state.JobsStore.jobs;
    }

    created() {
        this.$store.dispatch('JobsStore/fetchJobsList');
    };
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