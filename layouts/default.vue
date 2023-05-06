<template>
    <Header/>
    <slot/>
    <Footer/>
    <Menu/>
</template>

<script>
import Header from "../components/views/Header";
import Footer from "../components/views/Footer";
import Menu from "../components/views/Menu";
export default {
    name: "default",
    components: { Menu, Footer, Header }
};
</script>

<style scoped>

</style>