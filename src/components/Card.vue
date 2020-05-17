<template>
    <div class="card" :style="card.colors">
        <div class="icons">
            <img class="chip" :src="require('@/assets/'+card.chip)" alt />
            <img class="vendor" :src="require('@/assets/'+card.vendor)" alt />
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
        return {};
    },
    methods: {},
    computed: {}
};
</script>

<style lang="scss" scoped>
.card {
    grid-area: card;
    display: flex;
    flex-direction: column;
    background: lightgrey;
    font-family: "PT Mono", monospace;
    text-transform: uppercase;
    // width: 90%;
    max-width: 396px;
    // min-width: 80%;
    max-height: 243px;
    // min-height: 243px;
    margin: 1rem 0 0 0;
    padding: 1rem;
    padding-right: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 5px rgba(211, 211, 211, 0.69);
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.616);
    &:hover {
        cursor: pointer;
    }

    .icons {
        display: flex;
        justify-content: space-between;
    }
    .card-bottom {
        display: flex;
        justify-content: space-between;
        text-align: start;
        .valid {
            h3,
            p {
                text-align: end;
            }
        }
    }
    h1 {
        font-size: calc(2vw * 3.3);
    }
    h3 {
        font-size: calc(1.17vw * 3.5);
    }
    p {
        font-size: calc(1vw * 3.5);
    }
    .chip {
        width: 10vw;
    }
    .vendor {
        width: 6vw;
    }

    @media screen and (min-width: 440px) {
        .chip,.vendor {
            width: initial;
        }
        h1 {
            font-size: 2em;
        }
        h3 {
            font-size: 1.17em;
        }
        p {
            font-size: 1em;
        }
    }
}
</style>