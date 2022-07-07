<template>
    <div>
        <Header/>
        <Home/>
        <About/>
<!--        <Separator :left="true"/>-->
        <ImgSeparator :left="true"
                      img="img/separator/grass-block.jpg"
                      object="img/separator/minecraft-house.png"/>
        <Skills />
        <Separator :right="true"/>
        <Projects/>
        <Separator :left="true"/>
        <Companies/>
        <Separator :right="true"/>
        <TimelineGit/>
        <Separator :left="true"/>
        <Socials/>
        <Separator :right="true"/>
        <Competitors/>
        <Footer/>
        <Menu/>
    </div>
</template>

<script>
import Header from "@//views/Header";
import Home from "@/views/Home";
import About from "@/views/About";
import Projects from "@/views/Projects";
import Skills from "@/views/Skills";
import Companies from "@/views/Companies";
import Footer from "@/views/Footer";
import Menu from "@/views/Menu";
import TimelineGit from "@/views/TimelineGit";
import Competitors from "@/views/Competitors";
import Separator from "@/components/Separator";
import ImgSeparator from "@/components/ImgSeparator";
import Contact from "@/views/Contact";
import Socials from "@/views/Socials";

export default {
    name: "Index",
    components: {
        ImgSeparator,
        Contact,
        Separator,
        Competitors,
        TimelineGit,
        Menu,
        Footer,
        Companies,
        Skills,
        Projects,
        About,
        Home,
        Header,
        Socials
    }
}
</script>

<style lang="scss">
@import "src/styles/variables";
#app {
    section {
        color: $color-light;
        background-color: $background-light;
    }

    &.dark {
        #header, #menu {
            color: $light2;
        }

        section {
            color: $light2;
            background-color: $background-dark;
        }
    }
}

section {
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 50px;

    h1 {
        margin: 0 auto 10px auto;
        text-align: center;
        font-weight: bold;
        border-bottom: solid 2px $accent;
        font-size: 2rem;

        &.small {
            margin: 25px auto 10px auto;
            font-size: 1.25rem;
        }

    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1rem;
        margin: 2rem auto;
    }

    .hide {
        display: none;
    }
}
</style>