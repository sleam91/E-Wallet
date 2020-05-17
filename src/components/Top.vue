<template>
    <div class="top">
        <h1 v-html="header"></h1>
    </div>
</template>

<script>
export default {
    name: "Top",
    props: {
        header: String
    }
};
</script>

<style lang="scss" scoped>
h1{
    font-size: 2.2em;
    font-weight: bold;
}
</style>