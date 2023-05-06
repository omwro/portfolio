<template>
        <Icon @click="toggleDarkMode"
              class="light-mode-icon icon"
              name="material-symbols:light-mode"
              size="32px"/>
        <Icon @click="toggleDarkMode"
              class="dark-mode-icon icon"
              name="material-symbols:dark-mode"
              size="32px"/>
</template>

<script setup>
const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
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
    @apply text-primary-text-dark cursor-pointer;
}
</style>