<template>
    <div>
        <ListItem />
    </div>
    
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue'

@Component({
    components: {
        ListItem,
    }
})
export default class ListView extends Vue{

}

</script>
