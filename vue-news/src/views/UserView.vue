<template>
    <div>
        <div>Name : {{user.id}}</div>
        <div>created: {{user.created}}</div>
        <div>Karma : {{user.karma}}</div>
    </div>
    
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class UserView extends Vue{

    created() {
        this.$store.dispatch('UserStore/fetchUser', this.$route.params.id);
    }

    get user() {
        return this.$store.state.UserStore.user;
    }

}
</script>

