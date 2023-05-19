<template>
    <header
        class="fixed top-0 left-0 z-10 flex w-full items-center justify-between border-b p-3 transition duration-500 bg-primary-bg-light border-b-primary dark:bg-primary-bg-dark">
        <div>
            <a href="/#home">
                <nuxt-img alt="logo"
                     class="m-auto max-h-6 cursor-pointer dark:invert"
                     src="/img/company/logo.webp" />
            </a>
        </div>
        <div class="flex flex-nowrap">
            <nav class="hidden gap-4 md:flex">
                <ul class="flex flex-row items-center gap-4">
                    <li v-for="n in nav">
                        <a v-if="n.name !== 'Home'"
                           :key="n.name"
                           :href="n.href"
                           class="my-0 self-center text-base no-underline hover:text-primary dark:hover:text-primary-light hover:border-b-primary hover:border-b">
                            {{ $t(n.translate) }}
                        </a>
                    </li>
                </ul>
                <DarkModeSwitcher />
                <LanguageSwitcher />
            </nav>
            <IconWrapper @click="openMenu()"
                  class="hamburger"
                  name="hamburger"
                  size="32px" />
        </div>
    </header>
    <div class="h-[58px]"></div>
</template>

<script setup>
import nav from "../../assets/json/navigation.json";
import LanguageSwitcher from "../elements/LanguageSwitcher";
import DarkModeSwitcher from "../elements/DarkModeSwitcher";
import { openMenu } from "../../composables/useMenu";
import IconWrapper from "../elements/IconWrapper";
</script>

<script>
export default {
    name: "Header"
};
</script>

<style scoped>
header .hamburger {
    /* Overriding default icon style */
    @apply cursor-pointer md:hidden;
}
</style>