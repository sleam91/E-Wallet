<template>
    <div class="home">
        <top :header="'E-WALLET'" />
        <p>ACTIVE CARD</p>
        <card :card="chosenCard" v-if="this.$root.getChosenCardId()"/>
        <card-stack :cardList="cardList" @switch="updateChosenCard" />
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
            cardList: this.$root
                .getCardList()
                .filter(card => card.id !== this.$root.getChosenCardId())
        };
    },
    methods: {
        updateChosenCard(payload) {
            this.chosenCard = this.$root.getCard(payload.id);
            this.$root.setChosenCardId(payload.id);
            this.cardList = this.$root
                .getCardList()
                .filter(card => card.id !== payload.id);
        }
    }
};
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 434px;
    margin-left: 1rem;
    margin-right: 1rem;
}
.add-card {
    width: 100%;
    button {
        min-width: 93%;
        margin-top: 2rem;
        font-size: x-large;
        font-weight: bold;
        border: 1px solid black;
        background: white;
        border-radius: 10px;
        padding: 1.5rem 0;
        &:hover {
            cursor: pointer;
        }
    }
}
</style>
