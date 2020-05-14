<template>
    <div class="card-form">
        <p>CARD NUMBER</p>
        <input />
        <p>CARD HOLDER NAME</p>
        <input placeholder="FIRSTNAME LASTNAME" />
        <p>VALID THRU</p>
        <input />
        <p>CCV</p>
        <input />
        <p>VENDOR</p>
        <select id="vendor">
            <option selected hidden></option>
            <option>BITCOIN INC</option>
            <option>NINJA BANK</option>
            <option>BLOCK CHAIN INC</option>
            <option>EVIL CORP</option>
        </select>
        <p></p>
        <router-link to="/">
            <button>Add Card</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "CardForm",
};
</script>

<style lang="scss" scoped>
</style>