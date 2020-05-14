<template>
    <div class="card-stack">
        <card v-for="card in cardList" :key="card.id" :card="card" />
    </div>
</template>

<script>
import Card from "@/components/Card";
export default {
    name: "CardStack",
    props: {
        
    },
    components: {
        Card
    },
    data(){
        return{
            cardList: this.$root.getCardList()
        }
    }
};
</script>

<style lang="scss" scoped>
.card-stack{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>