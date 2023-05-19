<template>
    <menu
        class="flex flex-wrap flex-col fixed h-fit max-h-[calc(100%_-_32px)] w-0 bg-primary-bg-light dark:bg-primary-bg-dark z-[15] transition-[0.5s] p-0 border-l border-l-transparent border-b border-b-transparent right-0 inset-y-0">
        <div class="flex flex-row items-center justify-between p-3 text-2xl">
            <div class="border-b-[solid] border-b-primary">Menu</div>
            <IconWrapper @click="closeMenu()"
                  class="cursor-pointer hover:rotate-[90deg] hover:transition-[1s]"
                  name="close"
                  size="32px" />
        </div>
        <div class="m-2 mb-4 flex flex-col gap-2">
            <a
                v-for="n in nav"
                :href="n.href"
                @click="closeMenu()"
                :key="n.name"
                class="flex justify-center text-base text-inherit no-underline hover:text-primary-light hover:underline"
            >{{ $t(n.translate) }}</a
            >
            <DarkModeSwitcher />
            <LanguageSwitcher />
        </div>
    </menu>
</template>

<script setup>
import nav from "../../assets/json/navigation.json";
import DarkModeSwitcher from "../elements/DarkModeSwitcher";
import LanguageSwitcher from "../elements/LanguageSwitcher";
import { closeMenu } from "../../composables/useMenu";
import IconWrapper from "../elements/IconWrapper";
</script>

<script>
export default {
    name: "Menu"
};
</script>

<style scoped>
html.menu menu {
    @apply w-full border-b transition-[0.5s] ease-[ease-in-out] border-b-primary md:rounded-[0_0_0_24px] md:border-l-primary md:w-40 md:border-l;
}
</style>