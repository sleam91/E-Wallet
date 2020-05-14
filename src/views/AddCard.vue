<template>
    <div class="add-card">
        <top :header="'ADD A NEW BANK CARD'"/>
        <p>NEW CARD</p>
        <card />
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
        };
    }
};
</script>

<style lang="scss" scoped>
</style>