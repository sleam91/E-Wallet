<template>
    <div class="home">
        <top :header="'E-WALLET'" />
        <p>ACTIVE CARD</p>
        <card />
        <card-stack />
        <router-link to="/add">
            <button>Add New Card</button>
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
            cardList: this.$root.getCardList()
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
