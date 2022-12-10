<template>
    <div id="index">
        <Header />
        <Home />
        <Companies />
        <About />
        <Separator :left="true" />
        <Skills />
        <Separator :right="true" />
        <Projects />
        <Separator :left="true" />
        <Timeline />
        <Separator :right="true" />
        <Socials />
        <Separator :left="true" />
        <Competitors />
        <Footer />
        <Menu />
    </div>
</template>

<script>
import Header from "@/master/Header";
import Home from "@/index/Home";
import About from "@/index/About";
import Projects from "@/index/Projects";
import Skills from "@/index/Skills";
import Companies from "@/index/Companies";
import Footer from "@/master/Footer";
import Menu from "@/master/Menu";
import Timeline from "@/index/Timeline";
import Competitors from "@/index/Competitors";
import Separator from "@/components/Separator";
import Socials from "@/index/Socials";

export default {
    name: "Index",
    components: {
        Separator,
        Competitors,
        Timeline,
        Menu,
        Footer,
        Companies,
        Skills,
        Projects,
        About,
        Home,
        Header,
        Socials,
    },
};
</script>

<style lang="scss"></style>
