<template>
    <div class="card" :style="colorBackground">
        <div class="icons">
            <img :src="require('@/assets/'+card.chip)" alt />
            <img :src="require('@/assets/'+card.vendor)" alt />
        </div>
        <h1>{{card.cardNumber}}</h1>
        <div class="card-bottom">
            <div class="name">
                <p>CARDHOLDER NAME</p>
                <h3>{{card.name}}</h3>
            </div>
            <div class="valid">
                <p>VALID THRU</p>
                <h3>{{card.valThru}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        card: Object
    },
    data() {
        return {
          colorBackground:{
              backgroundColor:this.getColorBackground(),
              color:this.card.vendor==="vendor-bitcoin.svg"?"black":"white"
          }
        };
    },
    methods:{
        getColorBackground(){
            let backgroundColor;
            switch(this.card.vendor){
                case "vendor-bitcoin.svg":
                    backgroundColor="gold"
                    break;
                case "vendor-blockchain.svg":
                    backgroundColor="purple"
                    break;
                case "vendor-evil.svg":
                    backgroundColor="crimson"
                    break;
                case "vendor-ninja.svg":
                    backgroundColor="#333333"
                    break;
                default:
                    backgroundColor="rgba(211, 211, 211, 0.877)"
                break;
            }
            return backgroundColor
        }
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
.card {
    background: rgba(211, 211, 211, 0.877);
    font-family: "PT Mono", monospace;
    // width: 90%;
    max-width: 550px;
    min-width: 400px;
    height: 40%;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 1px rgba(211, 211, 211, 0.69);
    &:hover {
        cursor: pointer;
    }
    display: flex;
    flex-direction: column;
    .icons {
        display: flex;
        justify-content: space-between;
    }
    .card-bottom {
        display: flex;
        justify-content: space-between;
        text-align: start;
    }
}
</style>