<template >
    <div class="card-stack" >
        <card v-for="card in cardList" :key="card.id" :card="card" @click.native="chooseCard(card)"/>
    </div>
</template>

<script>
import Card from "@/components/Card";
export default {
    name: "CardStack",
    props: {
        cardList:Array
    },
    components: {
        Card
    },
    data(){
        return{
      
        }
    },
    methods:{
        chooseCard(card){
            console.log("here")
            this.$emit('switch',card)
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