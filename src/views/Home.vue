<template>
    <div class="home">
        <top :header="'E-WALLET'" />
        <p v-if="hasActiveCard">ACTIVE CARD</p>
        <p v-else>SELECT A CARD</p>
        <card :card="chosenCard" v-if="hasActiveCard"/>
        <img
            class="trash"
            v-if="hasActiveCard"
            src="https://img.icons8.com/dotty/48/000000/trash.png"
            alt="remove"
            @click="toggleWarning"
        />
        <card-stack :cardStack="cardStack" @switch="updateChosenCard" v-if="cardStack.length>0"/>
        <router-link class="add-card" to="/add">
            <button>ADD A NEW CARD</button>
        </router-link>
        <div class="overlay" v-if="showWarning" :style="{zIndex:cardStack.length}">
            <div class="popup">
                <h2>Are you sure you want to delete your Active Card?</h2>
                <button @click="removeCard">Yes</button>
                <button @click="toggleWarning">No</button>
            </div>
        </div>
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
            hasActiveCard: false,
            showWarning: false,
            chosenCard: this.$store.getters.getCard(this.$store.state.chosenCardId),
            cardStack: this.$store.getters.getCardStack
        };
    },
    methods: {
        updateChosenCard(payload) {
            this.hasActiveCard = true;
            this.chosenCard = this.$store.getters.getCard(payload.id);
            this.$store.dispatch('setChosenCardId',payload.id);
            this.cardStack = this.$store.getters.getCardStack
        },
        toggleWarning() {
            this.showWarning = !this.showWarning;
        },
        removeCard() {
            this.$store.dispatch('removeCard',this.chosenCard.id);
            this.toggleWarning();
            this.hasActiveCard = false;
        }
    },
    beforeMount() {
        this.hasActiveCard= this.$store.state.chosenCardId
    }
};
</script>

<style lang="scss" scoped>
.home {
    perspective: 1000px;
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
    margin-top: 3rem;
    button {
        min-width: 93%;
        // margin-top: 2rem;
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
.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.774);
    top: 0;
    left: 0;
    // z-index: 13;
}

.popup {
    position: relative;
    width: 250px;
    background: lightgray;
    border: 2px solid gray;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}
// @media screen and (min-width: 454px) {
//     .add-card{
//         margin-top: 2rem;
//     }
// }
</style>
