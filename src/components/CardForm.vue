<template>
    <div class="card-form">
        <p>CARD NUMBER</p>
        <input v-model="card.cardNumber" @input="update()" />
        <p>CARD HOLDER NAME</p>
        <input v-model="card.name" placeholder="FIRSTNAME LASTNAME" @input="update()" />
        <p>VALID THRU</p>
        <input v-model="card.valThru" @input="update()" />
        <p>CCV</p>
        <input v-model="card.ccv" />
        <p>VENDOR</p>
        <select v-model="card.vendor" id="vendor" @change="update()">
            <option selected hidden></option>
            <option value="vendor-bitcoin.svg">BITCOIN INC</option>
            <option value="vendor-ninja.svg">NINJA BANK</option>
            <option value="vendor-blockchain.svg">BLOCK CHAIN INC</option>
            <option value="vendor-evil.svg">EVIL CORP</option>
        </select>
        <p></p>
        <router-link class="add-card" to="/">
            <button @click="addCard">ADD CARD</button>
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
                vendor: "",
                chip: "chip-dark.svg"
            }
        };
    },
    methods: {
        addCard() {
            this.card.vendor = this.card.vendor || "vendor-bitcoin.svg";
            this.card.id = this.$root.getCardList().length + 1;
            this.$root.getCardList().push(this.card);
        },
        update() {
            (this.card.chip =
                !this.card || this.card.vendor === "vendor-bitcoin.svg"
                    ? "chip-dark.svg"
                    : "chip-light.svg"),
                this.$emit("update", this.card);
        }
    }
};
</script>

<style lang="scss" scoped>
.card-form {
    font-family: "PT Mono", monospace;
    width: 100vw;
}
input,select{
    font-size: x-large;
    font-family: "PT Mono", monospace;
    padding: 1.2rem 1rem;
    border-radius: 10px;
    max-width: 400px;
    width: 90%;
    border-color: black;
    border-width: 1px;
}
.add-card {
    width: 90%;
    button {
        font-size: x-large;
        font-weight: bold;
        color: white;
        background: black;
        border-radius: 10px;
        padding: 1.5rem 9rem;
        &:hover {
            cursor: pointer;
        }
    }
}
</style>