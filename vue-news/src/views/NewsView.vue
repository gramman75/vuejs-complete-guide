<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue';
@Component({
    components: {
        ListItem
    }
})
export default class NewsView extends Vue {
  
}
</script>

<style scoped>
</style>