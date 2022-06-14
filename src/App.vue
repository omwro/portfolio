<template>
    <main id="app">
        <router-view/>
    </main>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
html, body, #app {
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: sans-serif;
}
</style>
