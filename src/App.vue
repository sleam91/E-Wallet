<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    async beforeMount() {
        try {
            await this.$store.dispatch("getCardsFromDB");
        } catch (error) {
            throw new Error();
        }
    }
};
</script>

<style lang="scss">
body {
    margin-left: 0;
    margin-right: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
