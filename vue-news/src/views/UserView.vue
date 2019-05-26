<template>
    <div>
        <!-- <UserProfile :userInfo="user" /> -->
        <UserProfile>
            <div slot="userName">{{ user.id }}</div>
            <template slot="time">{{ user.created }}</template>
            <span slot="karma">{{ user.karma }}</span>
        </UserProfile>
    </div>
    
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import UserProfile from '@/components/UserProfile.vue';


@Component({
    components:{
        UserProfile,
    }
})
export default class UserView extends Vue{

    created() {
        this.$store.dispatch('UserStore/fetchUser', this.$route.params.id);
    }

    get user() {
        return this.$store.state.UserStore.user;
    }

}
</script>

