<template>
    <div class="card">{{card}}</div>
</template>

<script>
export default {
    name: "Card",
    props: {
        card:Object
    },
    data() {
        return {
            // card:this.$root.getCard(this.$route.params.id),
            // cardList: this.$root.getCardList()
        };
    },
    computed:{

    }
};
</script>

<style lang="scss" scoped>
.card {
    background: lightgray;
    // width: 90%;
    max-width: 350px;
    height: 40%;
    margin:1rem 0;
    padding:1rem
}
</style>