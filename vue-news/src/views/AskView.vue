<template>
    <div>
        <list-item />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue'

@Component({
    components:{
        ListItem,
    }
})
export default class AskViews extends Vue {
    created() {
        this.$store.dispatch('AskStore/fetchAskList')
    }
}
</script>


<style scoped>
</style>