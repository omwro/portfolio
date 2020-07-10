<template>
  <div id="app">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Companies/>
      <Resume/>
      <Contact/>
      <Footer/>
  </div>
</template>

<script>

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Companies from "./components/Companies";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {
      Footer,
      Contact,
      Resume,
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

</style>
