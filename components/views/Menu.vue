<template>
    <menu class="flex flex-wrap flex-col fixed h-fit max-h-[calc(100%_-_32px)] w-0 bg-primary-bg-light z-[15] transition-[0.5s] p-0 border-l border-l-transparent border-b border-b-transparent right-0 inset-y-0">
        <div class="flex flex-row items-center text-2xl justify-between p-3">
            <div class="border-b-[solid] border-b-primary">Menu</div>
            <Icon @click="closeMenu()"
                  class="cursor-pointer hover:rotate-[90deg] hover:transition-[1s]"
                  name="ic:outline-close"
                  size="32px"/>
        </div>
        <div class="ml-1.5">
            <a
                v-for="n in nav"
                :href="n.href"
                @click="closeMenu()"
                :key="n.name"
                class="flex text-base text-inherit no-underline justify-center m-4 hover:text-primary-light hover:underline"
            >{{ $t(n.translate) }}</a
            >
            <DarkModeSwitcher/>
            <LanguageSwitcher/>
        </div>
    </menu>
</template>

<script setup>
import nav from "../../assets/json/navigation.json";
import DarkModeSwitcher from "../elements/DarkModeSwitcher";
import LanguageSwitcher from "../elements/LanguageSwitcher";

const closeMenu = () => document.documentElement.classList.remove("menu");
</script>

<script>
export default {
    name: "Menu"
};
</script>

<style scoped>
html.menu menu {
    @apply w-full transition-[0.5s] ease-[ease-in-out] border-b border-b-primary  md:w-40 md:rounded-[0_0_0_24px] md:border-l md:border-l-primary;
}
</style>