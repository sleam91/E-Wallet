<template>
    <div class="card-form">
        <p>CARD NUMBER</p>
        <input v-model="card.cardNumber" @input="update()" maxlength="19"/>
        <p>CARD HOLDER NAME</p>
        <input v-model="card.name" placeholder="FIRSTNAME LASTNAME" @input="update()" maxlength="24"  />
        <div class="date-ccv">
            <div>
                <p>VALID THRU</p>
                <input v-model="card.valThru" @input="update()" maxlength="5"/>
            </div>
            <div>
                <p>CCV</p>
                <input v-model="card.ccv" type="number" @input="update()"/>
            </div>
        </div>
        <p>VENDOR</p>
        <select v-model="card.vendor" id="vendor" @change="updateBackgroundColor()">
            <option disabled hidden></option>
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
                chip: "chip-dark.svg",
                colors: {
                    backgroundColor: "rgba(214, 214, 214)",
                    color: "black"
                }
            }
        };
    },
    methods: {
        addCard() {
            this.card.vendor = this.card.vendor || "vendor-bitcoin.svg";
            this.card.colors.backgroundColor = this.getColorBackground();
            this.card.colors.color =
                this.card.vendor === "vendor-bitcoin.svg" ? "black" : "white";
            this.card.chip =
                this.card.vendor === "vendor-bitcoin.svg"
                    ? "chip-dark.svg"
                    : "chip-light.svg";
            this.$store.dispatch('addCard',this.card);
        },
        update() {
            this.$emit("update", this.card);
        },
        updateBackgroundColor() {
            this.card.chip =
                this.card.vendor === "vendor-bitcoin.svg"
                    ? "chip-dark.svg"
                    : "chip-light.svg";
            this.$emit("updateBackgroundColor", this.card);
        },
        getColorBackground() {
            let backgroundColor;
            switch (this.card.vendor || "vendor-bitcoin.svg") {
                case "vendor-bitcoin.svg":
                    backgroundColor = "rgba(255, 180, 66)";
                    break;
                case "vendor-blockchain.svg":
                    backgroundColor = "rgba(127, 80, 228)";
                    break;
                case "vendor-evil.svg":
                    backgroundColor = "rgba(233, 47, 78)";
                    break;
                case "vendor-ninja.svg":
                    backgroundColor = "rgba(54, 54, 54)";
                    break;
            }
            return backgroundColor;
        }
    }
};
</script>

<style lang="scss" scoped>
.card-form {
    margin-top: 1rem;
    font-family: "PT Mono", monospace;
    width: 100vw;
    max-width: 434px;
}
input,
select {
    font-size: x-large;
    font-family: "PT Mono", monospace;
    padding: 1.2rem 1rem;
    border-radius: 10px;
    // max-width: 434px;
    width: 90%;
    border-color: black;
    border-width: 1px;
    box-sizing: border-box;
    text-transform: uppercase;
}

select {
    appearance: none;
    background-color: white;
    background-image: url("https://img.icons8.com/material-sharp/28/000000/expand-arrow.png");
    background-repeat: no-repeat;
    background-position: 95%;
}
.add-card {
    // max-width: 434px;
    button {
        width: 90%;
        margin-top: 2rem;
        font-size: x-large;
        font-weight: bold;
        color: white;
        background: black;
        border-radius: 10px;
        padding: 1.5rem 0;

        &:hover {
            cursor: pointer;
        }
    }
}

p {
    font-size: 0.9rem;
    font-weight: bold;
    text-align: start;
    margin-left: 1.5rem;
    margin-bottom: 0.2rem;
}

.date-ccv {
    display: flex;

    // justify-content: space-between;
    // max-width: 434px;
    width: 95%;

    div {
        // width: 50%;

        p {
            white-space: nowrap;
            // margin-left: 1.5rem;
        }
        input {
            margin-left: 1.3rem;
            // margin-right: 1.5rem;
        }
    }
}
</style>