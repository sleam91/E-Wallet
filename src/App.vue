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
            throw new Error(error);
        }
    }
};
</script>

<style lang="scss">
body {
    margin-left: 0;
    margin-right: 0;
}
.no-vendor{
    background-color: rgb(214, 214, 214);
    color: black        
}
.bitcoin{
    background-color: rgb(255, 180, 66);
    color: black 
}
.evil{
    background-color: rgb(233, 47, 78);
    color: white 
}
.blockchain{
    background-color: rgb(127, 80, 228);
    color: white 
}
.ninja{
    background-color: rgb(54, 54, 54);
    color: white 
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
