<template>
  <div id="app">
      <Header/>
      <Home/>
      <Action/>
      <AboutIDE v-if="programmerMode === true"/>
      <About v-if="programmerMode === false"/>
      <Skills/>
      <Projects/>
      <Companies/>
      <Timeline/>
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

export default {
  name: 'App',
    data() {
      return {
          darkMode: false,
          programmerMode: false,
          experimentMode: false
      }
    },
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
      Header
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
        }

        h2 {
            margin: 25px auto 10px auto;
            text-align: center;
            font-weight: bold;
            border-bottom: solid 2px $brilliant-red;
            font-size: 2.6rem;
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 1.4rem;
            margin: 30px auto;
        }
    }

</style>
