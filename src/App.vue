<template>
    <main id="app" :class="dark ? 'dark' : ''">
        <router-view/>
    </main>
</template>

<script>
export default {
    name: 'App',
    computed: {
        dark () {
            return this.$store.state.darkmode
        }
    }
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
