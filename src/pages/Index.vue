<template>
    <div>
        <Header/>
        <Home/>
        <Action/>
        <About/>
        <Separator :left="true"/>
        <Skills />
        <Separator :right="true"/>
        <Projects/>
        <Separator :left="true"/>
        <Companies/>
        <Separator :right="true"/>
        <TimelineGit/>
        <Separator :left="true"/>
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
import Action from "@/views/Action";
import TimelineGit from "@/views/TimelineGit";
import Competitors from "@/views/Competitors";
import Separator from "@/components/Separator";

export default {
    name: "Index",
    components: {
        Separator,
        Competitors,
        TimelineGit,
        Action,
        Menu,
        Footer,
        Companies,
        Skills,
        Projects,
        About,
        Home,
        Header
    }
}
</script>

<style lang="scss">
@import "../styles/variables";
#app {
    section {
        color: $dark0;
        background-color: $light0;

        &#action, &.quicky {
            background-color: $light1;
        }

        &#footer {
            background-color: $dark5;
        }
    }

    &.dark {
        #header, #menu {
            color: $light2;
        }

        section {
            color: $light2;
            background-color: $dark1;

            &#action, &.quicky {
                background-color: $dark2;
            }
        }
    }
}

section {
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        margin: 75px auto 10px auto;
        text-align: center;
        font-weight: bold;
        border-bottom: solid 2px $brilliant-red;
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