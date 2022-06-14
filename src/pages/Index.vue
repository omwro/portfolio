<template>
    <div>
        <Header/>
        <Home/>
        <Action/>
        <AboutIDE class="programmer-only"/>
        <About class="non-programmer-only"/>
        <Quicky :msg="$t('quicky.quicky1')" class="non-programmer-only"/>
        <Skills class="non-programmer-only"/>
        <Quicky :msg="$t('quicky.quicky2')" class="non-programmer-only"/>
        <Projects/>
        <Quicky :msg="$t('quicky.quicky3')" class="non-programmer-only"/>
        <Companies/>
        <Quicky :msg="$t('quicky.quicky4')" class="non-programmer-only"/>
        <Timeline class="non-programmer-only"/>
        <TimelineGit class="programmer-only"/>
        <Quicky :msg="$t('quicky.quicky5')" class="non-programmer-only"/>
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
import Timeline from "@/views/Timeline";
import Footer from "@/views/Footer";
import Menu from "@/views/Menu";
import Action from "@/views/Action";
import AboutIDE from "@/views/AboutIDE";
import Quicky from "@/components/Quicky";
import TimelineGit from "@/views/TimelineGit";
import Competitors from "@/views/Competitors";

export default {
    name: "Index",
    components: {
        Competitors,
        TimelineGit,
        AboutIDE,
        Action,
        Menu,
        Footer,
        Timeline,
        Companies,
        Skills,
        Projects,
        About,
        Home,
        Header,
        Quicky
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

    &.programmer {
        .programmer-only {
            display: flex;
        }
        .non-programmer-only {
            display: none;
        }
    }

    .programmer-only {
        display: none;
    }
    .non-programmer-only {
        display: flex;
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