<template>
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <slot name="userName"></slot>
            <!-- {{ userInfo.id }} -->
            <div class="time">
                <slot name="time"></slot>
                <!-- {{ userInfo.created }} -->
                <slot name="karma"></slot>
            </div>
            <div>
            </div>
         
        </div>   
        
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class UserProfile extends Vue{

    // @Prop()
    // private userInfo: any;


    // get userInfo() {
    //     return this.$store.state.UserStore.user;
    // }

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


