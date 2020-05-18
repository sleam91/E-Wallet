<template>
    <div class="add-card">
        <top :header="'ADD A NEW <br/> BANK CARD'" />
        <p>NEW CARD</p>
        <card :card="emptyCard" :style="[emptyCard.colors,margin]" />
        <card-form @update="update" @updateBackgroundColor="updateBackgroundColor" />
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
                chip: "chip-dark.svg",
                colors: {
                    backgroundColor: "rgba(214, 214, 214)",
                    color: "black"
                }
            },
            margin: {
                marginLeft: "1rem",
                marginRight: "1rem"
            }
        };
    },
    methods: {
        update(payload) {
            this.emptyCard.cardNumber =
                payload.cardNumber || this.emptyCard.cardNumber;
            this.emptyCard.name = payload.name || this.emptyCard.name;
            this.emptyCard.valThru = payload.valThru || this.emptyCard.valThru;
        },
        updateBackgroundColor(payload) {
            this.emptyCard.vendor = payload.vendor || this.emptyCard.vendor;
            this.emptyCard.colors.backgroundColor = this.getColorBackground();
            this.emptyCard.colors.color =
                payload.vendor === "vendor-bitcoin.svg" ? "black" : "white";
            this.emptyCard.chip = payload.chip || this.emptyCard.chip;
        },
        getColorBackground() {
            let backgroundColor;
            switch (this.emptyCard.vendor) {
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
.add-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    // max-width: 434px;
    // margin-left: 1rem;
    // margin-right: 1rem;
}
</style>