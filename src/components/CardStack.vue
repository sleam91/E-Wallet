<template >
    <div class="card-stack" :style="[cardList.length>stackLimit?cssCardStackLimit:cssCardStack]">
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
        return {
            rowHeight: 4 - 0.2 * +this.cardList.length,
            rowHeightLimit: 4 - 0.2 * +5,
            stackLimit:10
        };
    },
    methods: {
        chooseCard(card) {
            this.$emit("switch", card);
        },

        cardStack(i) {
            return {
                boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.205) inset",
                // marginTop: i * 4 + "rem",
                zIndex: i
            };
        }
    },
    computed: {
        cssCardStack() {
            return {
                "--gridAutoRows": this.rowHeight + "rem",
                "--heightDesktop":
                    "calc(243px + " +
                    ((this.cardList.length - 1) * this.rowHeight + 1.9) +
                    "rem)",
                "--heightMobile":
                    "calc(50vw + " +
                    ((this.cardList.length - 1) * 15 + 7) +
                    "vw)"
            };
        },
        cssCardStackLimit() {
            return {
                "--gridAutoRows": this.rowHeightLimit + "rem",
                "--heightDesktop":
                    "calc(243px + " +
                    ((this.stackLimit- 1) * this.rowHeightLimit + 1.9) +
                    "rem)",
                "--heightMobile":
                    "calc(50vw + " + ((this.stackLimit - 1) * 15 + 7) + "vw)"
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.card-stack {
    padding-top:1rem;
    justify-content: center;
    display: grid;
    // grid-template-areas: "card";
    grid-auto-rows: 15vw;
    height: var(--heightMobile);
    box-shadow: 0px 0px 15px 5px rgba(211, 211, 211, 0.69);
    margin-top: 2rem;
    border-radius: 10px;
    // pointer-events: none;
    background: rgba(211, 211, 211, 0.363);

    overflow: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
}
.card:hover {
    transform: translateY(-1rem);
}

// .card-stack>.card{
//     pointer-events: auto;
// }
// // .card-stack:hover{

// //    }
@media screen and (min-width: 454px) {
    .card-stack {
        grid-auto-rows: var(--gridAutoRows);
        height: var(--heightDesktop);
        // grid-auto-rows: 4rem;
    }
}
</style>