<template>
    <div class="add-card">
        <top :header="'ADD A NEW <br/> BANK CARD'" />
        <router-link to="/">
            <button>CANCEL</button>
        </router-link>
        <p>NEW CARD</p>
        <card :card="emptyCard" :class="colors" />
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
            },
            colors:'no-vendor',
        };
    },
    methods: {
        update(payload) {
            this.emptyCard.cardNumber =
                payload.cardNumber || this.emptyCard.cardNumber;
            this.emptyCard.name = payload.name || this.emptyCard.name;
            this.emptyCard.valThru = payload.valThru || this.emptyCard.valThru;
            this.emptyCard.ccv = payload.ccv;
        },
        updateBackgroundColor(payload) {
            this.emptyCard.vendor = payload.vendor || this.emptyCard.vendor;
            this.getColorBackground();
        },
        getColorBackground() {
            switch (this.emptyCard.vendor) {
                case "vendor-bitcoin.svg":
                    this.colors='bitcoin'
                    break;
                case "vendor-blockchain.svg":
                    this.colors='blockchain'
                    break;
                case "vendor-evil.svg":
                    this.colors='evil'
                    break;
                case "vendor-ninja.svg":
                    this.colors='ninja'
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.add-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    perspective: 1000px;
    .card{
        margin-left: 1rem;
        margin-right: 1rem
    }

    // max-width: 434px;
    // margin-left: 1rem;
    // margin-right: 1rem;
}
</style>