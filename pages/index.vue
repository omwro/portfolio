<template>
    <NuxtLayout>
        <Home/>
        <Companies/>
        <About/>
        <Separator :left="true"/>
        <Projects/>
        <Separator :right="true"/>
        <Skills/>
        <Separator :left="true"/>
        <Timeline/>
        <Separator :right="true"/>
        <Socials/>
        <Separator :left="true"/>
        <Competitors/>
    </NuxtLayout>
</template>

<script setup>
import Timeline from "../components/views/Timeline";
import Home from "../components/views/Home";
import Companies from "../components/views/Companies";
import About from "../components/views/About";
import Skills from "../components/views/Skills";
import Projects from "../components/views/Projects";
import Socials from "../components/views/Socials";
import Competitors from "../components/views/Competitors";
import Separator from "../components/elements/Separator";
</script>

<script>
export default {
    name: "index"
};
</script>