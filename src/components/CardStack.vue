<template >
    <div class="card-stack" :style="cardStack.length>stackLimit?cssCardStackLimit:cssCardStack">
        <card
            v-for="(card,i) in cardStack"
            :key="card.id"
            :card="card"
            @click.native="chooseCard(card)"
            :style="{zIndex:i}"
        />
    </div>
</template>

<script>
import Card from "@/components/Card";
export default {
    name: "CardStack",
    props: {
        cardStack: Array
    },
    components: {
        Card
    },
    data() {
        return {
            rowHeight: 4 - 0.2 * +this.cardStack.length,
            rowHeightLimit: 4 - 0.2 * +5,
            stackLimit: 5
        };
    },
    methods: {
        chooseCard(card) {
            this.$emit("switch", card);
        },        
    },
    computed: {
        cssCardStack() {
            return {
                "--gridAutoRows": this.rowHeight + "rem",
                "--heightDesktop":
                    "calc(243px + " +
                    ((this.cardStack.length - 1) * this.rowHeight + 1.9) +
                    "rem)",
                "--heightMobile":
                    "calc(50vw + " +
                    ((this.cardStack.length - 1) * 15 + 7) +
                    "vw)"
            };
        },
        cssCardStackLimit() {
            return {
                "--gridAutoRows": this.rowHeightLimit + "rem",
                "--heightDesktop":
                    "calc(243px + " +
                    ((this.stackLimit - 1) * this.rowHeightLimit + 1.9) +
                    "rem)",
                "--heightMobile":
                    "calc(50vw + " + ((this.stackLimit - 1) * 15 + 7) + "vw)",
                'overflow':'scroll'
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.card-stack {
    // padding-top:1rem;
    justify-content: center;
    display: grid;
    grid-auto-rows: 15vw;
    height: var(--heightMobile);
    box-shadow: 0px 0px 15px 5px rgba(211, 211, 211, 0.69);
    margin-top: 2rem;
    border-radius: 10px;
    background: rgba(211, 211, 211, 0.363);

    // overflow: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
}
.card {
    transition: transform 0s;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.205) inset;
    transition: none;
    transform-style: none;
}
.card:hover {
    transform: translateY(-1rem);
}

@media screen and (min-width: 478px) {
    .card-stack {
        grid-auto-rows: var(--gridAutoRows);
        height: var(--heightDesktop);
    }
}
</style>