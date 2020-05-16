<template>
    <div class="add-card">
        <top :header="'ADD A NEW BANK CARD'" />
        <p>NEW CARD</p>
        <card :card="emptyCard" />
        <card-form />
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
                vendor: ""
            }
        };
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