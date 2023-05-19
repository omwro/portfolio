<template>
        <IconWrapper @click="toggleTheme(); "
              class="light-mode-icon icon"
              name="sun"
              size="32px"/>
        <IconWrapper @click="toggleTheme()"
              class="dark-mode-icon icon"
              name="moon"
              size="32px"/>
</template>

<script setup lang="ts">
import useTheme from "~/composables/useTheme";
const { toggleTheme } = useTheme();
import { useHead } from "@unhead/vue";
import IconWrapper from "~/components/elements/IconWrapper.vue";

useHead({
    script: [{ children: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark')} else { document.documentElement.classList.remove('dark')}` }]
})
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