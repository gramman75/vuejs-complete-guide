<template>
    <div>
        <section>
            <!-- 질문상세정보 -->
            <div>
                <div>
                    사용자 프로필
                </div>
                <div>
                    {{item.user}}
                </div>   
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

@Component
export default class ItemView extends Vue{

    get item() {
        return this.$store.getters['itemStore/getItem'];
    }

    created() {
        this.$store.dispatch('itemStore/fetchItem', this.$route.params.id);
    }

}
</script>



