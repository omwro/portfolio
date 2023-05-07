<template>
        <Icon @click="toggle(); "
              class="light-mode-icon icon"
              :name="IconMapper.sun"
              size="32px"/>
        <Icon @click="toggle()"
              class="dark-mode-icon icon"
              :name="IconMapper.moon"
              size="32px"/>
</template>

<script setup>
import { IconMapper } from "../../composables/IconMapper";
import { toggleDarkMode } from "../../composables/useDarkMode";
import { closeMenu } from "../../composables/useMenu";

const toggle = () => {
    toggleDarkMode();
    closeMenu();
}
</script>

<script>
export default {
    name: "DarkModeSwitcher"
};
</script>

<style scoped>
html:not(.dark) .light-mode-icon{
    @apply block;
}

html:not(.dark) .dark-mode-icon{
    @apply hidden;
}

html.dark .dark-mode-icon{
    @apply block;
}

html.dark .light-mode-icon{
    @apply hidden;
}

.icon {
    @apply text-primary-text-dark hover:text-primary dark:text-primary-text-light dark:hover:text-primary cursor-pointer mx-auto md:mx-0;
}
</style>