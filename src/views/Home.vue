<template>
    <div class="home">
        <top />
        <card />
        <card-stack />
        <router-link to="/add">
            <button>Add New Card</button>
        </router-link>
    </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardStack from "@/components/CardStack";

export default {
    name: "Home",
    components: {
        Top,
        Card,
        CardStack
    }
};
</script>

<style lang="scss" scoped>
</style>
