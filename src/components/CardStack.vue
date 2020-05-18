<template >
    <div class="card-stack" :style="cssCardStack">
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
            // height: 
        };
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
    computed: {
        cssCardStack() {
            
            console.log(this.cardList.length)
            console.log(this.rowHeight)
            console.log(this.rowHeight*this.cardList.length)
            console.log(this.rowHeight*this.cardList.length+243)
            // console.log(this.height)
            return {
                '--gridAutoRows': this.rowHeight+'rem',
                '--minHeightDesktop':'calc(243px + '+((this.cardList.length-1)*this.rowHeight+1.9)+'rem)',
                '--minHeightMobile':'calc(50vw + '+((this.cardList.length-1)*15+7)+'vw)'
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.card-stack {
    justify-content: center;
    display: grid;
    // grid-template-areas: "card";
    grid-auto-rows: 15vw;
    min-height: var(--minHeightMobile);
    box-shadow: 0px 0px 15px 5px rgba(211, 211, 211, 0.69);
    margin-top: 2rem;
    border-radius: 10px;
    // pointer-events: none;
    background: rgba(211, 211, 211, 0.363);
    
    overflow: visible;
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
        min-height: var(--minHeightDesktop);
        // grid-auto-rows: 4rem;
    }
}
</style>