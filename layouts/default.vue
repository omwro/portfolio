<template>
    <Header/>
    <main>
        <slot/>
    </main>
    <Footer/>
    <Menu/>
</template>

<script setup>
import Header from "../components/views/Header";
import Footer from "../components/views/Footer";
import Menu from "../components/views/Menu";
</script>

<script>
export default {
    name: "default"
};
</script>

<style scoped>
main {
    /* 100VH - Header - Footer*/
    min-height: calc(100vh - 58px - 40px);
}
</style>