<template>
    <div id="app">
        <notifications position="top" width="100%"/>
        <Header/>
        <Home/>
        <Action/>
        <AboutIDE class="programmer-only"/>
        <About class="non-programmer-only"/>
        <Quicky :msg="$t('quicky.quicky1')"/>
        <Skills/>
        <Quicky :msg="$t('quicky.quicky2')"/>
        <Projects/>
        <Quicky :msg="$t('quicky.quicky3')"/>
        <Companies/>
        <Quicky :msg="$t('quicky.quicky4')"/>
        <Timeline class="non-programmer-only"/>
        <TimelineGit class="programmer-only"/>
        <Quicky :msg="$t('quicky.quicky5')"/>
        <Competitors/>
        <Footer/>
        <Menu/>
        <!--        <CV/>-->
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
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Action from "./components/Action";
import AboutIDE from "./components/AboutIDE";
import Quicky from "./forms/Quicky";
import TimelineGit from "@/components/TimelineGit";
import Competitors from "@/components/Competitors";
// import CV from "./components/CV";

export default {
    name: 'App',
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
		Quicky,
		// CV
	},
    created() {
        console.warn("Hey fellow curious developer.\n" +
            "My name is Omer and welcome to my portfolio website.\n" +
            "This website is build to introduce myself and show off my skills.\n" +
            "Ofcourse no website is perfect (unless it gets featured in awwwards) so hit me up for ideas or any " +
            "improvements.\n\n" +
            "This website is build in Vue.js just for fun, extra experience and cleaner/easier folder structure as a " +
            "followup from the previous angular portfolio website and older plain html/css/js website.\n" +
            "Website is still in development so 'prepare for trouble, make it double'.")
		this.registerVisitor()
	},
	methods: {
		registerVisitor() {
            this.axios.post('https://api.omererdem.nl/visitor', {
                "app": "Portfolio",
                "uri": window.location.href,
                "useragent": navigator.userAgent
            });
		}
	}
}
</script>

<style lang="scss">
@import "src/styles/variables";

html, body, #app {
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: sans-serif;
}

#app {
    .section {
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

        .section {
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

.section {
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    //&:not(#home):not(#footer) {
    //    border-top: solid 2px $grey;
    //}

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


.vue-notification-group {
    margin-top: 0.5rem;

    .notification-title {
        font-size: 1rem;
        text-align: center;
    }

    .notification-content {
        font-size: 0.9rem;
        text-align: center;
    }
}

</style>
