<template>
    <select v-model="currentLangauge" @change="setLanguage($event)"
            class="focus-visible:outline-0">
        <option value="nl">NL</option>
        <option value="en">EN</option>
    </select>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '#imports'
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})

let currentLangauge = locale.value;
const setLanguage = (event) => {
    setLocale(event.target.value);
    currentLangauge = locale.value;
}
</script>

<script>
export default {
    name: "LanguageSwitcher"
}
</script>