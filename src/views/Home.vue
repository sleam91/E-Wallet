<template>
    <div class="home" >
        <top :header="'E-WALLET'" />
        <p>ACTIVE CARD</p>
        <card :card="chosenCard" />
        <card-stack :cardList="cardList" @switch="updateChosenCard"/>
        <router-link class="add-card" to="/add">
            <button>ADD A NEW CARD</button>
        </router-link>
    </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardStack from "@/components/CardStack";

export default {
    name: "Home",
    components: {
        Top,
        Card,
        CardStack
    },
    data() {
        return {
            chosenCard: this.$root.getCard(this.$root.getChosenCardId()),
            cardList: this.$root.getCardList().filter(card=>card.id!==this.$root.getChosenCardId())
        };
    },
    methods:{
        updateChosenCard(payload){
            this.chosenCard=this.$root.getCard(payload.id)
            this.$root.setChosenCardId(payload.id)
            this.cardList= this.$root.getCardList().filter(card=>card.id!==payload.id)
        },

    }
};
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
.add-card {
    width: 90%;
    button {
        font-size: x-large;
        font-weight: bold;
        border: 1px solid black;
        background: white;
        border-radius: 10px;
        padding: 2rem 6.5rem;
        &:hover {
            cursor: pointer;
        }
    }
}

</style>
