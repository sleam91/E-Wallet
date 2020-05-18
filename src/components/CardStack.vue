<template >
    <div class="card-stack">
        <card
            v-for="(card,i) in cardList"
            :key="card.id"
            :card="card"
            @click.native="chooseCard(card)"
            :style="cardStack(i)"
        />
    </div>
</template>

<script>
import Card from "@/components/Card";
export default {
    name: "CardStack",
    props: {
        cardList: Array
    },
    components: {
        Card
    },
    data() {
        return {};
    },
    methods: {
        chooseCard(card) {
            this.$emit("switch", card);
        },

        cardStack(i) {
            return {
                boxShadow: "none",
                // marginTop: i * 4 + "rem",
                zIndex: i
            };
        }
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
.card-stack {
    justify-content: center;
    display: grid;
    // grid-template-areas: "card";
    grid-auto-rows: 4rem;
    box-shadow: 0px 0px 15px 5px rgba(211, 211, 211, 0.69);
    margin-top: 2rem;
    border-radius: 10px;
    // pointer-events: none;
    background: rgba(211, 211, 211, 0.363);
}
.card:hover {
    transform: translateY(-1rem);
}

// .card-stack>.card{
//     pointer-events: auto;
// }
// // .card-stack:hover{

// //    }
</style>