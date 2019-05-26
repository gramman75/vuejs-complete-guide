<template>
    <div>
        <section>
            <!-- 사용자 정보-->
            <!-- <UserProfile :userInfo="user" /> -->
            <UserProfile>
                <router-link :to="`/user/${user.id}`" slot="userName">{{ user.id }}</router-link>
                <!-- < slot="userName">Item {{ user.id }}</a> -->
                <template slot="time">{{ user.created }}</template>
            </UserProfile>
            
        </section>
        <section>
            <div>
                <h2>{{item.title}}</h2>
            </div>
        </section>
        <section>
            댓글
        </section>
        <span v-html="item.content"></span>
    </div>
    
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import UserProfile from '@/components/UserProfile.vue';

@Component({
    components : {
        UserProfile,
    }
})
export default class ItemView extends Vue{

    get item() {
        return this.$store.getters['itemStore/getItem'];
    }

    get user() {
        return this.$store.state.UserStore.user;
    }

    created() {
        this.$store.dispatch('itemStore/fetchItem', this.$route.params.id);
    }

}
</script>


<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
} 

.time {
    font-size: 0.7rem;
}
</style>
