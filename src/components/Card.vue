<template>
    <div class="card" :style="card.colors">
        <div class="icons">
            <img :src="require('@/assets/'+card.chip)" alt />
            <img :src="require('@/assets/'+card.vendor)" alt />
        </div>
        <h1>{{card.cardNumber}}</h1>
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
    methods:{

    },
    computed: {}
};
</script>

<style lang="scss" scoped>
.card {
    background: lightgrey;
    font-family: "PT Mono", monospace;
    // width: 90%;
    max-width: 550px;
    min-width: 400px;
    max-height: 243px;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 5px rgba(211, 211, 211, 0.69);
    &:hover {
        cursor: pointer;
    }
    display: flex;
    flex-direction: column;
    .icons {
        display: flex;
        justify-content: space-between;
    }
    .card-bottom {
        display: flex;
        justify-content: space-between;
        text-align: start;
        .valid{
            h3{
            display: flex;
            justify-content: flex-end;}
        }
    }
}
</style>