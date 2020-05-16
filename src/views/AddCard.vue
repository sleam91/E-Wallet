<template>
    <div class="add-card">
        <top :header="'ADD A NEW BANK CARD'" />
        <p>NEW CARD</p>
        <card :card="emptyCard" :style="colorBackground" />
        <card-form @update="update" />
    </div>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";
export default {
    name: "AddCard",
    components: {
        Top,
        Card,
        CardForm
    },
    data() {
        return {
            emptyCard: {
                id: 0,
                cardNumber: "XXXX XXXX XXXX XXXX",
                name: "FIRSTNAME LASTNAME",
                valThru: "MM/YY",
                ccv: null,
                vendor: "vendor-bitcoin.svg",
                chip: "chip-dark.svg"
            },
            colorBackground: {
                backgroundColor: "rgba(211, 211, 211, 0.877)",
                color:"black"
            }
        };
    },
    methods: {
        update(payload) {
            this.emptyCard.cardNumber =
                payload.cardNumber || this.emptyCard.cardNumber;
            this.emptyCard.name = payload.name || this.emptyCard.name;
            this.emptyCard.valThru = payload.valThru || this.emptyCard.valThru;
            this.emptyCard.vendor = payload.vendor || this.emptyCard.vendor;
            this.emptyCard.chip = payload.chip || this.emptyCard.chip;
            this.colorBackground.backgroundColor = this.getColorBackground();
            this.colorBackground.color =
                this.emptyCard.vendor === "vendor-bitcoin.svg"
                    ? "black"
                    : "white";
        },
        getColorBackground() {
            let backgroundColor;
            switch (this.emptyCard.vendor) {
                case "vendor-bitcoin.svg":
                    backgroundColor = "gold";
                    break;
                case "vendor-blockchain.svg":
                    backgroundColor = "purple";
                    break;
                case "vendor-evil.svg":
                    backgroundColor = "crimson";
                    break;
                case "vendor-ninja.svg":
                    backgroundColor = "#333333";
                    break;
                default:
                    backgroundColor = "rgba(211, 211, 211, 0.877)";
                    break;
            }
            return backgroundColor;
        }
    }
};
</script>

<style lang="scss" scoped>
.add-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>