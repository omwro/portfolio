<template>
    <div id="app">
        <Header/>
        <Home/>
        <Action/>
        <AboutIDE/>
        <About/>
        <Quicky msg="Currently not looking for any jobs until june 2022. I do however accept small projects."/>
        <Skills/>
        <Quicky msg="Bucketlist: Python, React & C++"/>
        <Projects/>
        <Quicky msg="`When something is important enough, you do it even if the odds are not in your favor.` - Elon Musk"/>
        <Companies/>
        <Quicky msg="`Life is not fair, get used to it.` - Bill Gates"/>
        <Timeline/>
        <Quicky msg="`Your brand is what other people say about you when you're not in the room.` - Jeff Bezos"/>
        <Contact/>
        <Footer/>
        <Menu/>
    </div>
</template>

<script>

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Companies from "./components/Companies";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Action from "./components/Action";
import AboutIDE from "./components/AboutIDE";
import Quicky from "./forms/Quicky";

export default {
    name: 'App',
    components: {
        AboutIDE,
        Action,
        Menu,
        Footer,
        Contact,
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
@import "src/styles/variables";

html {
    font-family: sans-serif;
}

html, body, #app {
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 10px;
}

#app {
    color: $dark0;

    &.dark {
        color: $light0;
    }
}

.section {
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:not(#home):not(#footer) {
        border-top: solid 2px $grey;
    }

    h1 {
        margin: 75px auto 10px auto;
        text-align: center;
        font-weight: bold;
        border-bottom: solid 2px $brilliant-red;
        font-size: 3.6rem;

        &.small {
            margin: 25px auto 10px auto;
            font-size: 2.6rem;
        }

    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.4rem;
        margin: 30px auto;
    }

    .hide {
        display: none;
    }
}
</style>
