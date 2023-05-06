<template>
    <header id="header">
        <div class="header-left">
            <a href="/#home">
                <img
                    alt="logo"
                    class="logo"
                    src="/img/company/logo.webp" />
            </a>
        </div>
        <div class="header-right">
            <nav class="navbar">
                <template v-for="n in nav">
                    <a v-if="n.name !== 'Home'" :key="n.name" :href="n.href">
                        {{ $t(n.translate) }}
                    </a>
                </template>
                <DarkModeSwitcher/>
                <LanguageSwitcher/>
            </nav>
            <div class="hamburger" @click="openMenu">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </div>
        </div>
    </header>
</template>

<script setup>
import nav from "../../assets/json/navigation.json";
import LanguageSwitcher from "../elements/LanguageSwitcher";
import DarkModeSwitcher from "../elements/DarkModeSwitcher";

</script>

<script>

export default {
    name: "Header",
    computed: {
        dark() {
            // return this.$store.state.darkmode;
        },
    },
    methods: {
        openMenu() {
            // this.$store.commit("toggleMenu");
        },
        onDarkModeToggle() {
            this.$store.commit("toggleDarkmode");
        },
    },
};
</script>

<style scoped>
#app #header {
    @apply bg-primary-bg-light transition-[0.5s] fixed z-10 flex items-center justify-between h-8 p-3 border-b-primary border-b-[solid] top-0 inset-x-0;
}
#app #header .header-left .logo {
    @apply max-h-6 cursor-pointer m-auto;
}
#app #header .header-right {
    @apply flex flex-nowrap;
}
#app #header .header-right .navbar {
    @apply hidden md:flex;
}
#app #header .header-right .navbar a {
    @apply text-[black] no-underline text-base self-center mx-2 my-0 hover:text-primary hover:border-b-[solid] hover:border-b-primary;
}

#app #header .header-right .hamburger {
    @apply w-[25px] h-[25px] flex flex-col cursor-pointer pt-[5px] md:hidden;
}

#app #header .header-right .hamburger span {
    @apply w-full h-1/4 transition-[0.3s] border-t-[solid];
}
#app #header .header-right .hamburger:hover .hamburger-top,
#app #header .header-right .hamburger:hover .hamburger-bottom {
    @apply w-6/12 transition-[0.3s] mx-[25%] my-0;
}

#app.dark #header {
    @apply bg-primary-bg-dark;
}
#app.dark #header.ontop {
    @apply bg-transparent transition-[0.5s] border-b-[none];
}
#app.dark #header .navbar a {
    @apply text-primary-text-light hover:text-primary-light hover:border-b-primary-light;
}
#app.dark #header .logo {
    @apply invert;
}

</style>
