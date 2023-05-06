<template>
    <Header/>
    <Home/>
    <Companies/>
    <About/>
    <Skills/>
    <Projects/>
    <Timeline/>
    <Socials/>
    <Competitors/>
    <Footer/>
    <Menu/>
</template>

<script setup>
import Header from "../components/views/Header";
import Timeline from "../components/views/Timeline";
import Home from "../components/views/Home";
import Companies from "../components/views/Companies";
import About from "../components/views/About";
import Skills from "../components/views/Skills";
import Projects from "../components/views/Projects";
import Socials from "../components/views/Socials";
import Competitors from "../components/views/Competitors";
import Footer from "../components/views/Footer";
import Menu from "../components/views/Menu";
</script>

<script>
export default {
    name: "index"
};
</script>

<style scoped>

</style>