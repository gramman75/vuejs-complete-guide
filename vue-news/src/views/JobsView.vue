<template>
    <div>
        <list-item />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue';

@Component({
    components:{
        ListItem,
    }
})
export default class JobsViews extends Vue {
    created() {
        this.$store.dispatch('JobsStore/fetchJobsList');
    }
}
</script>

<style scoped>
</style>