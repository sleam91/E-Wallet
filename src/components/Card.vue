<template>
    <div class="card">
        <div class="icons">
            <img src="@/assets/chip-light.svg" alt="">
            <img :src="require('@/assets/'+card.vendor)" alt="">
        </div>
        <h2>{{card.cardNumber}}</h2>
        <div class="card-bottom">
            <div class="name">
                <p>CARDHOLDER NAME</p>
                <h3>{{card.name}}</h3>
            </div>
            <div class="valid">
                <p>VALID THRU</p>
                <h3>{{card.valThru}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        card: Object
    },
    data() {
        return {
          
        };
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
.card {
    background: lightgray;
    // width: 90%;
    max-width: 550px;
    min-width: 400px;
    height: 40%;
    margin: 1rem 0;
    padding: 1rem;
    &:hover {
        cursor: pointer;
    }
    display: flex;
    flex-direction: column;
    .icons{
        display: flex;
        justify-content: space-between;
    }
    .card-bottom{
        display: flex;
        justify-content: space-between;
    }
}
</style>