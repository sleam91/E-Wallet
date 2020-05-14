<template>
    <div class="add-card">
        <top/>
        <card/>
        <card-form/>
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
    }
};
</script>

<style lang="scss" scoped>
</style>