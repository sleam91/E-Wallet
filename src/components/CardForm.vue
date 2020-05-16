<template>
    <div class="card-form">
        <p>CARD NUMBER</p>
        <input v-model="card.cardNumber"/>
        <p>CARD HOLDER NAME</p>
        <input v-model="card.name" placeholder="FIRSTNAME LASTNAME" />
        <p>VALID THRU</p>
        <input v-model="card.valThru" />
        <p>CCV</p>
        <input v-model="card.ccv" />
        <p>VENDOR</p>
        <select v-model="card.vendor" id="vendor">
            <option selected hidden></option>
            <option value="@/assets/vendor-bitcoin.svg">BITCOIN INC</option>
            <option value="@/assets/vendor-ninja.svg">NINJA BANK</option>
            <option value="@/assets/vendor-blockchain.svg">BLOCK CHAIN INC</option>
            <option value="@/assets/vendor-evil.svg">EVIL CORP</option>
        </select>
        <p></p>
        <router-link to="/">
            <button @click="addCard">Add Card</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "CardForm",
    data() {
        return {
            card: {
                id: 0,
                cardNumber: "",
                name: "",
                valThru: "",
                ccv: null,
                vendor: ""
            }
        };
    },
    methods:{
        addCard(){
            this.card.id=this.$root.getCardList().length+1
            this.$root.getCardList().push(this.card)
        }
    }
    
};
</script>

<style lang="scss" scoped>
</style>